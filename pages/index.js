
import { Table,Textarea} from '@geist-ui/core'
import {
  Program, Provider, web3
} from '@project-serum/anchor';
import { clusterApiUrl,Connection, PublicKey} from '@solana/web3.js';
import React, { useEffect, useState } from "react";

import Meta from "../components/Meta";
import idl from './idl.json';

// SystemProgram is a reference to the Solana runtime!
const { SystemProgram, Keypair } = web3;

// Create a keypair for the account that will hold the GIF data.
let baseAccount = Keypair.generate();

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address);

// Set our network to devnet.
const network = clusterApiUrl('devnet');

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed"
}





const App = () => {

  const [walletAddress, setWalletAddress] = useState(null); 
  const [data, setData] = useState([])
  const [inputVal, setInputVal] = useState('');
  let messageList = null
  let addsList = null
  let datesList = null


  const isWalletConnected = async () => {
  try {
    const { solana } = window 
      if (solana) {
            if (solana.isPhantom) {
              console.log("Phantom is enabled")
              const response = await solana.connect({ onlyIfTrusted: true });
              console.log(
                'Connected with Public Key:',
                response.publicKey.toString()
              );
              setWalletAddress(response.publicKey.toString());
          } else {
              alert("Please Install Phantom Wallet @ phantom.app")
          }
      }
  } catch {
    console.log("Erorr finding solana")
  }
}

  const onInputChange = (event) => {
    const { value } = event.target
    setInputVal(value);
  }


  const getTableLists = () => {
      try {
        const provier = getProvider();
        const program = new Program(idl, programID, provier);
        const account = program.account.baseAccount.fetch(baseAccount.publicKey)
        messageList = account.messageList
        addsList = account.addsList
        datesList = account.datesList

      } catch(erorr) {
        console.log("Error getting table lists", erorr)

      }
    }

  const createAnAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      console.log("Creating An Account")
      await program.rpc.newProject({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount]
      })
      await getTableLists()
    } catch(err){
      console.log(err)
    }
  }

  
  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(
      connection, window.solana, opts.preflightCommitment,
    );
    return provider;
  }

  const onSubmit = () => {
    const waladd = shortString(walletAddress, 6)
    let currentdate = new Date(); 
    let datetime =  currentdate.toDateString()
    let message = shortString(inputVal, 91)
    datesList.push(datetime)
    messageList.push(message)
    addsList.push(waladd)
    for (let i = 0; i < messageList.length; i++) {
      setData([...data,{ property: addsList[i], description: messageList[i], type: datesList[i] },])
    }
    setInputVal('');
  }

   
  const shortString =  (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  const connectTheWallet = async () => {
    try {
      const { solana } = window;
      if (solana) {
        const response = await solana.connect()
        console.log('Connected with Public Key:', response.publicKey.toString());
        setWalletAddress(response.publicKey.toString())
        }
  } catch(err) {
    console.log(err)
  }
}

useEffect( () => {
  const onLoad = async () => {
    await isWalletConnected()
  };
  window.addEventListener("load", onLoad);
  return window.removeEventListener("load", onLoad);

}, []);

useEffect(() => {
  if (walletAddress) {
    console.log('Fetching Wallet, Mesage, Date list...');
    getTableLists()
  }
}, [walletAddress]);

return (
    <div className="dark:text-white dark:bg-gray-900 min-h-screen flex justify-center">
      <Meta title="Home" />
      {/* <Nav /> */}
      <main className="m-6">
        <div className="container mx-auto">
          <h1 className="title mb-3 font-didact pt-10">Rahul&#39;s GuestBook</h1>
          <p>This Guestbook was made with the Solana Blockchain ~ Rust, Next.js, & Javscript</p>
          <div>
            {walletAddress && messageList
            ?

            <div className="">
              <div>
                <Textarea value={inputVal} onChange={onInputChange} width="100%" placeholder="Please enter a message. Anything is fine!" className='shadow-lg' />
                <div className="flex justify-end">
                  <button onClick={onSubmit} className='btn my-3'>Submit!</button>
                </div>
              </div> 

              <div className="pt-5">
                <h3>Most Recent Messages...</h3>
                <Table data={data}>
                  <Table.Column prop="property" label="Address" />
                  <Table.Column prop="description" label="Message" />
                  <Table.Column prop="type" label="Date" />
                  
                </Table>
              </div>
           </div>
            : (!walletAddress)  ?
            <div className= "flex justify-center">
              <button 
                onClick={connectTheWallet} 
                className="btn my-3 ">Connect Wallet
              </button>
            </div>
            : 
            <div className="flex justify-center">
            <button 
                onClick={createAnAccount} 
                className="btn my-3 ">One-Time Initialization 
              </button>

            </div>
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;