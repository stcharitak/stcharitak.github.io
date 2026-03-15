#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_SCRIPT="$ROOT_DIR/scripts/build-pages.sh"
WATCH_SRC_DIR="$ROOT_DIR/src"
WATCH_LAYOUT_JS="$ROOT_DIR/js/layout.js"
POLL_INTERVAL="${1:-1}"

compute_hash() {
  {
    if [[ -f "$WATCH_LAYOUT_JS" ]]; then
      printf '%s\0' "$WATCH_LAYOUT_JS"
    fi

    find "$WATCH_SRC_DIR" -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" \) -print0
  } | sort -z | xargs -0 sha1sum 2>/dev/null | sha1sum | awk '{print $1}'
}

run_build() {
  "$BUILD_SCRIPT"
  echo "Watching for changes..."
}

echo "Initial build..."
run_build

if command -v inotifywait >/dev/null 2>&1; then
  echo "Watcher mode: inotifywait"
  while inotifywait -qq -r -e close_write,create,delete,move "$WATCH_SRC_DIR" "$WATCH_LAYOUT_JS"; do
    run_build
  done
else
  echo "Watcher mode: polling every ${POLL_INTERVAL}s (install inotify-tools for instant rebuilds)"
  last_hash="$(compute_hash)"

  while true; do
    sleep "$POLL_INTERVAL"
    current_hash="$(compute_hash)"

    if [[ "$current_hash" != "$last_hash" ]]; then
      last_hash="$current_hash"
      run_build
    fi
  done
fi
