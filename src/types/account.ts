export interface IInitialUserData {
    uid: string
    email: string | null
    name: string | null
    provider: string
    photoUrl: string | null
}

export interface IUserData extends IInitialUserData {
    username: string
    firstname: string
    lastname: string
    roles?: JSON | null
    club?: JSON | null
    stamp?: JSON | null
    onSite?: boolean | null
}

export interface IAuthContext {
    user: IUserData | null
    loading: boolean
    setLoading: (loading: boolean) => void
    signinWithGoogle: (redirect: string) => Promise<void>
    signout: () => void
}