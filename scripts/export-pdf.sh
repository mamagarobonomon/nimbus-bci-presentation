#!/usr/bin/env bash
# Export pitch deck PDF via Playwright (see scripts/export-pdf.mjs).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-3456}"
OUTPUT="${1:-${ROOT}/Nimbus-BCI-Venture-Deck.pdf}"

if ! curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
  echo "Starting local server on port ${PORT}..."
  npx --yes serve "${ROOT}" -p "${PORT}" >/dev/null 2>&1 &
  SERVER_PID=$!
  trap 'kill ${SERVER_PID} 2>/dev/null || true' EXIT
  for _ in $(seq 1 30); do
    curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1 && break
    sleep 0.5
  done
fi

cd "${ROOT}"
if [[ ! -d node_modules/playwright ]]; then
  echo "Installing dependencies..."
  npm install
fi

python3 -c "from PIL import Image" 2>/dev/null || {
  echo "Pillow required: pip3 install pillow" >&2
  exit 1
}

PORT="${PORT}" SLIDE_COUNT="${SLIDE_COUNT:-20}" node scripts/export-pdf.mjs \
  "http://127.0.0.1:${PORT}/" "${OUTPUT}"
