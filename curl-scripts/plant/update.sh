#!/bin/bash

ID="6256d6d662824e08d82b33c8"
TOKEN="58cb7cac05156cb2186a49427599637a"
SPECIES="Fiddle"
LIGHT="Indirect"
DATE="04-13-2022"

API="http://localhost:4741"
URL_PATH="/plants"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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