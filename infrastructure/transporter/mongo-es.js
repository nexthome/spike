var namespace = "transporter-collection.entries";
var pipeline =
  Source({ name:"mongo", tail: true, namespace: namespace })
    .transform({ filename: "transformers/passthrough_and_log.js", namespace: namespace })
    .save({ name:"es", namespace: namespace });