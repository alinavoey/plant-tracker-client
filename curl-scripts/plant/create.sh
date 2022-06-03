#!/bin/bash

TOKEN="58cb7cac05156cb2186a49427599637a"
SPECIES="Snake"
LIGHT="Low"
DATE="04-08-2022"

API="http://localhost:4741"
URL_PATH="/plants"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "plant": {
      "species": "'"${SPECIES}"'",
      "lightLevel":  "'"${LIGHT}"'",
      "lastWaterDate": "'"${DATE}"'"
    }
  }'

echo