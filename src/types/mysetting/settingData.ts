export interface Group {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
}

export interface Membership {
  group: Group;
  role: string;
  userImage: string;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
}

export interface User {
  teamId: string;
  image: string;
  nickname: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  id: number;
  memberships: Membership[];
}

export interface UserPatch {
  nickname: string;
  name: string;
}

export interface UserPassword {
  passwordConfirmation: string;
  password: string;
}

export interface UserPasswordCheck {
  email: string;
  password: string;
}

export interface UserProfileChange {
  image: File | string | null;
}

export interface UserProfileNickname {
  nickname: string;
}
