const crypto = require('crypto')

module.exports = class UnityDecryptClient
{
    constructor() {

    }

    createDecryptStream(packageKey) {
        const cryptoBits = Buffer.from(packageKey, "hex")

        const keyBits = cryptoBits.subarray(0, 32)
        const ivBits = cryptoBits.subarray(32, cryptoBits.length)

        return crypto.createDecipheriv('aes256', keyBits, ivBits)
    }

    decrypt(packageData, packageKey) {
        return new Promise((resolve, reject) => {
            const decipher = this.createDecryptStream(packageKey)

            decipher.on('error', (err) => reject(err))
            
            let decrypted = decipher.update(packageData, 'binary', 'binary')

            decrypted += decipher.final('binary')
            
            resolve(decrypted)
        })
    }
}