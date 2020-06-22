#!/usr/bin/env bash
shopt -s extglob
npm run clean && npm run build-prefix && cd public && mkdir blog && mv !(blog) blog && cd ..