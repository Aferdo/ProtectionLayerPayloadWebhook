const Crypto = require('crypto');

const hmac = Crypto.createHmac("sha1", "2zr0CUv3o4rvyC2u1a376h3jcHQFwu9Tk0CmngpWHCru7vapauMiw==");
const signature = hmac.update(JSON.stringify(req.body)).digest('hex');
const shaSignature = `sha1=${signature}`;
const gitHubSignature = req.headers['x-hub-signature'];

if (!shaSignature.localeCompare(gitHubSignature)) {
    // Existing code
   module.exports = async function (context, req) {
 if (req.body.pages[0].title){
    context.res = {
        body: "Page is " + req.body.pages[0].title + ", Action is " + req.body.pages[0].action + ", Event Type is " + req.headers['x-github-event']
    };
}
else {
    context.res = {
        status: 400,
        body: ("Invalid payload for Wiki event")
    }
}
}

}