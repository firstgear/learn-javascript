// string primitive
// option 1 with ''
const message = 
'This is my\n' + 
'\'first\' message';

// option 2 with ``
const another = `This is my
first message`;

// option2 - usecase to send emails from within application
const dst = 'Klaasje';
const src = 'Gertje';
let email = 
`Hi Klaasje,

Thank you for joining my mailing list.

Regards,
Gertje`;

email = 
`Hi ${dst} van K${1+1+1},

Thank you for joining my mailing list.

Regards,
${src}`;