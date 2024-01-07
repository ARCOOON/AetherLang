const Tokens = Array();
Tokens.LBRACKET = "{";
Tokens.RBRACKET = "}";
Tokens.LPAREN = "(";
Tokens.RPAREN = ")";
Tokens.LSQUARE = "[";
Tokens.RSQUARE = "]";
Tokens.COMMA = ",";
Tokens.SEMICOLON = ";";
Tokens.NEWLINE = "\n";


const Operators = Array();
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


const Types = Array();
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
Types.Symbol = "Symbol";


module.exports = {
    Tokens,
    Operators,
    Types,
};

/*
const INTEGER = 'INTEGER';
const PLUS = 'PLUS';
const EOF = 'EOF';

function isDigit(variable) {
    // Check if the variable is a number and not NaN
    return typeof variable === 'number' && !isNaN(variable);
}

class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    toString() {
        return `Token(${this.type}, ${this.value})`;
    }
}


class Interpreter {
    constructor(source) {
        this.text = source.toString();
        this.pos = 0;
        this.current_token = null;
    }

    error() {
        throw new Error(`Cannot parse this -> ${this.current_token}`);
    }

    get_next_token() {
        const text = this.text

        if (this.pos > text.lenght - 1) {
            return Token(EOF, None)
        }

        const current_char = text[this.pos]

        if (isDigit(current_char)) {
            let token = new Token(INTEGER, current_char)
            this.pos += 1
            return token
        }

        if (current_char == '+') {
            let token = Token(PLUS, current_char)
            this.pos += 1
            return token
        }

        this.error()
    }

    eat(token_type) {
        // compare the current token type with the passed token
        // type and if they match then "eat" the current token
        // and assign the next token to the this.current_token,
        // otherwise raise an exception.

        if (this.current_token.type == token_type) {
            this.current_token = this.get_next_token()
        } else {
            this.error()
        }
    }

    expr() {
        this.current_token = this.get_next_token()

        // we expect the current token to be a single-digit integer
        var left = this.current_token
        this.eat(INTEGER)

        // we expect the current token to be a '+' token
        var op = this.current_token
        this.eat(PLUS)

        // we expect the current token to be a single-digit integer
        var right = this.current_token
        this.eat(INTEGER)
        // after the above call the this.current_token is set to
        // EOF token

        // at this point INTEGER PLUS INTEGER sequence of tokens
        // has been successfully found and the method can just
        // return the result of adding two integers, thus
        // effectively interpreting client input
        const result = left + right
        return result
    }
}



const interpreter = new Interpreter("3+4");
const result = interpreter.expr()

console.log(result)
*/