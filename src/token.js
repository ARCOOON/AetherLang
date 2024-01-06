const Tokens = {};

Tokens.LBRACKET = "{";
Tokens.RBRACKET = "}";
Tokens.LPAREN = "(";
Tokens.RPAREN = ")";
Tokens.LSQUARE = "[";
Tokens.RSQUARE = "]";
Tokens.COMMA = ",";
Tokens.SEMICOLON = ";";
Tokens.NEWLINE = "\n";


const Operators = {};

Operators.ASSIGN = "=";
Operators.DIVIDE = "/";
Operators.PLUS = "+";
Operators.MINUS = "-";
Operators.MULTIPLY = "*";
Operators.AND = "&";
Operators.OR = "|";
Operators.NOT = "!";
Operators.EQUALS = "=";
Operators.LESS_THAN = "<";
Operators.GREATER_THAN = ">";


const Types = {};

Types.AUTO = "auto";
Types.STRING = "String";
Types.BOOLEAN = "Boolean";
Types.INT = "Int";
Types.FLOAT = "Float";
Types.BIT = "Bit";
Types.UNDEFINED = "undefined";
Types.NULL = "null";
Types.OBJECT = "Object";
Types.LIST = "List";
Types.MAP = "Map";
Types.DICT = Types.MAP;

// Not sure if added
Types.Symbol = "Symbol";

console.log(Types['auto']);

module.exports = {
    Tokens,
    Operators,
    Types,
};
