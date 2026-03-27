#!/bin/bash
mkdir -p dist
cp -v *.html dist/ 2>/dev/null || true
cp -v *.js dist/ 2>/dev/null || true
cp -v *.css dist/ 2>/dev/null || true

# Ensure we have at least index.html
if [ ! -f dist/index.html ]; then
    echo "Error: index.html not found"
    exit 1
fi

echo "Build complete. Files in dist/:"
ls -la dist/
