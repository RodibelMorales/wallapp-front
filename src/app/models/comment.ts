export interface Comment{
    id?: number,
    comment: string;
    comment_likes: number;
    created_at:string;
    post_id? : number;
    user_id? : number;
}