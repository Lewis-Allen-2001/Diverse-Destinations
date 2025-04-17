
import Image from "next/image"
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export default function Header() {
    return(
    <>
<div   style={{
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    backgroundColor: '#1E77D7', 
  }}>       
     <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
</div>
</> 
    )
};
