/**
 * File with all interfaces
 */
console.log("interface running")
export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface Team {
  firstName: number;
  lastName: string;
  email: string;
  quote: string;
  devType: string;
}

export interface Project {
  id: number;
  title: string;
  desc: string;
  projectOwner: string;
  state: string;
  price: number;
  repository: string;
  createdOn: string;
  startingOn: string;
  endingOn: string;
  teamSizeReq: number;
}


export interface CreateUser {
  createUser: User;
}

export interface ProjectsData {
  Projects: Project;
}

export interface CreateProjectData {
  createProject: Project
}

export interface CreateTeamData {
  createTeam: Team
}


export interface FindUserByCred {
  createUser: User;
}

export interface LoginUser {
  email: string;
  password: string
}

export interface UserIdVars {
  email: string;
}

export interface TeamData {
  teamMembers: Team;
}

export interface UserData {
  findByArgs: User;
  user: User;
}

export interface UsersData {
  users: User[];
}

