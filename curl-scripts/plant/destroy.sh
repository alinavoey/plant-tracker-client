#!/bin/bash

ID="6256d6d662824e08d82b33c8"
TOKEN="58cb7cac05156cb2186a49427599637a"

API="http://localhost:4741"
URL_PATH="/plants"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo