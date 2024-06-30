export interface DOB {
  date?: string;
  age?: number;
}

export interface Name {
  title?: string;
  first?: string;
  last?: string;
}

export interface Picture {
  large?: string;
  medium?: string;
  thumbnail?: string;
}

export interface Location {
  city?: string;
  coordinates?: { latitude: string; longitude: string };
  country?: string;
  postcode?: number;
  state?: string;
  street?: { name: string; number: number };
  timezone?: { description: string; offset: string };
}

export interface UserDTO {
  dob?: DOB;
  email?: string;
  gender?: "male" | "female";
  name?: Name;
  nat?: string;
  phone?: string;
  picture?: Picture;
  location?: Location;
}

export class User {
  readonly dob: DOB = {};
  readonly email: string = "";
  readonly gender: "male" | "female" = "female";
  readonly name: string = "";
  readonly nationality: string = "";
  readonly phone: string = "";
  readonly picture: Picture = {};
  readonly location: Location = {};

  constructor(dto?: UserDTO) {
    if (!dto) { return; }
    this.dob = dto.dob ?? this.dob;
    this.email = dto.email ?? this.email;
    this.gender = dto.gender ?? this.gender;
    this.name = `${dto.name?.first} ${dto.name?.last}` ?? this.name;
    this.nationality = dto.nat ?? this.nationality;
    this.phone = dto.phone ?? this.phone;
    this.picture = dto.picture ?? this.picture;
    this.location = dto.location ?? this.location;
  }
}