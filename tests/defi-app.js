const anchor = require("@coral-xyz/anchor");
const assert=require('assert');
const {SystemProgram}=anchor.web3;
describe("defi-app", () => {
  // Configure the client to use the local cluster.
  const provider=anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.DefiApp;

  it("Creates a counter", async () => {
    const baseAccount=anchor.web3.Keypair.generate();
    const tx=await program.rpc.create({
      accounts:{
        baseAccount:baseAccount.publicKey,
        user:provider.wallet.publicKey,
        systemProgram:SystemProgram.programId,
      },
      signers:[baseAccount]
    });
    const account=await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log("Your transaction signature", tx);
    console.log('count 0:', account.count.toString());
    assert.ok(account.count.toString()==0);
    _baseAccount=baseAccount;
  });
  it("Increments the counter",async()=>{
    const baseAccount=_baseAccount;
    await program.rpc.increment({
      accounts:{
        baseAccount:baseAccount.publicKey,
      },
    });
    const account=await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Count 1: ', account.count.toString());
    assert.ok(account.count.toString()==1);
  });
});
