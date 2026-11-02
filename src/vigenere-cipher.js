const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');
        return this.process(message, key, 'encrypt');
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');
        return this.process(message, key, 'decrypt');
    }

    process(message, key, action) {
        const msgUpper = message.toUpperCase();
        const keyUpper = key.toUpperCase();
        const result = [];
        let keyIdx = 0;

        for (let i = 0; i < msgUpper.length; i++) {
            const code = msgUpper.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                const keyCode =
                    keyUpper.charCodeAt(keyIdx % keyUpper.length) - 65;
                let newCode;
                if (action === 'encrypt') {
                    newCode = ((code - 65 + keyCode) % 26) + 65;
                } else {
                    newCode = ((code - 65 - keyCode + 26) % 26) + 65;
                }
                result.push(String.fromCharCode(newCode));
                keyIdx++;
            } else {
                result.push(msgUpper[i]);
            }
        }

        if (!this.isDirect) result.reverse();
        return result.join('');
    }
}

module.exports = {
    directMachine: new VigenereCipheringMachine(),
    reverseMachine: new VigenereCipheringMachine(false),
    VigenereCipheringMachine,
};
