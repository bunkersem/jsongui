export const rndId = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        .toString(36)
        .toUpperCase();

export const rndSig = recieverName =>
    `${recieverName}&${Date.now()}&${rndId()}`;
