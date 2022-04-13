#!/bin/bash

TOKEN="58cb7cac05156cb2186a49427599637a"

API="http://localhost:4741"
URL_PATH="/plants"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo