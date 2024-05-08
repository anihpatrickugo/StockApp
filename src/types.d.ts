export default interface AssetType {
     id: number; 
     title: string; 
     image: string; 
    }


export interface UserType {
     id: string
     firstName: string | null
     lastName: string | null
     email: string
     balance: string
     walletAddress: string | null
     profilePhoto: string

   }