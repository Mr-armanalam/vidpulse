
"use client";

import React from "react";
import { 
  Show,           // <--- Use this instead of SignedIn/SignedOut
  SignInButton, 
  UserButton 
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ClapperboardIcon, UserCircleIcon, UserIcon } from "lucide-react";

const AuthButton = () => {
  return (
    <>
      {/* Replaces <SignedIn> */}
      <Show when="signed-in">
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label="My profile"
              href="/users/current"
              labelIcon={<UserIcon className="size-4" />}
            />
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4" />}
            />
            <UserButton.Action label="manageAccount" />
          </UserButton.MenuItems>
        </UserButton>
      </Show>

      {/* Replaces <SignedOut> */}
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 border-blue-500/20 rounded-full flex items-center gap-x-2"
          >
            <UserCircleIcon className="size-5" />
            Sign in
          </Button>
        </SignInButton>
      </Show>
    </>
  );
};

export default AuthButton;

// "use client";
// import { Button } from "@/components/ui/button";
// import { 
//   SignedIn, 
//   SignedOut, 
//   SignInButton, 
//   UserButton 
// } from "@clerk/nextjs";// import { ClapperboardIcon, UserCircleIcon, UserIcon } from "lucide-react";
// import React from "react";

// const AuthButton = () => {
//   return (
//     <>
//       <SignedIn>
//         <UserButton >
//           <UserButton.MenuItems>
//             <UserButton.Link 
//               label="My profile"
//               href="/users/current"
//               labelIcon={<UserIcon className="size-4" />}
//             />
//             <UserButton.Link 
//               label="Studio"
//               href="/studio"
//               labelIcon={<ClapperboardIcon className="size-4" />}
//             />
//             <UserButton.Action label="manageAccount" />
//           </UserButton.MenuItems>
//         </UserButton>
//       </SignedIn>
//       <SignedOut>
//         <SignInButton mode="modal">
//           <Button
//             variant={"outline"}
//             className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none "
//           >
//             <UserCircleIcon />
//             Sign in
//           </Button>
//         </SignInButton>
//       </SignedOut>
//     </>
//   );
// };

// export default AuthButton;
