export interface Posts{
    id? : number;
    content : string;
    likes : number;
    created_at?: string;
    privacity_id? : number;
    user_id? : number;
}