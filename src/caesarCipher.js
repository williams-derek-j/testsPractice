export default function caesarCipher(str, key) {
    let encrypted = ''

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)

        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            if (code >= 97 && code <= 122) {
                code += key

                if (code > 122) {
                    code = 96 + (code - 122)
                }
            } else {
                code += key

                if (code > 90) {
                    code = 64 + (code - 90)
                }
            }
        }
        encrypted += String.fromCharCode(code)
    }
    return encrypted
}