module.exports = {
    type: "object",
    properties: {
        nome: {type: "string"},
        descriçao: {type: "string"},
        preço: {type: "number"}
    },
    required: ["nome", "preço"],
    additionalProperties: false
}