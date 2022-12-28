export interface IInitialUserData {
    uid: string
    email: string | null
    name: string | null
    provider: string
    photoUrl: string | null
    stamp: JSON | null
    account_id: string
}

export interface IUserData extends IInitialUserData {
    username: string
    firstname: string
    lastname: string
    roles?: JSON | null
    club?: JSON | null
    onSite?: boolean | null
    qa?: boolean | null
}

export interface IUserQuestionData {
    username?: string
    prefix?: string
    firstname?: string
    lastname?: string
    status?: string
    school?: string
    grade?: string
    news?: string[]
    purpose?: string[]
}

export interface IAuthContext {
    user: IUserData | null
    loading: boolean
    setLoading: (loading: boolean) => void
    signinWithGoogle: (redirect: string) => Promise<void>
    signout: () => void
}