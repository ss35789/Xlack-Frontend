export interface ChannelType {
    channel_name: string;

    // title: Channel Name

    channel_id: number;
    // title: Channel Id
}
// export interface UserType{

// }
export interface UserInformationTypes {
    id: number;
    // title: ID
    // readOnly: true
    user: number;
    // title: User
    // readOnly: true
    github_id: string;
    // title: Github id
    // maxLength: 20
    // minLength: 1
    bio: string;
    // title: Bio
    // x-nullable: true
    thumbnail_url: string;
    // title: Thumbnail url
    // maxLength: 200
    // x-nullable: true
    created_at: string;
    // title: Created at
    // readOnly: true
    updated_at: string;
    // title: Updated at
    // readOnly: true
}
export interface ChatInfo {
    channelName: string;
    channelId: number;
    chatRef: any;
}

export interface MessageRec {
    message: string;
    timestamp: any;
    user: string;
    userImage: string;
}
