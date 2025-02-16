import type { BinaryLike } from 'crypto';

class InputFile {
    static fromBuffer(
        parts: Blob | BinaryLike,
        name: string
    ): File {
        return new File([parts], name)
    }
}

export default InputFile;