export function identifyUser(isLogged: boolean, firstName: string, lastName: string, gender: string): string {
    let identity = "Guest";
    if (isLogged) {
        if (firstName != "") {
            switch (gender) {
                case "m": {
                    identity = "Sir " + lastName;
                    break;
                }
                case "f": {
                    identity = "Lady " + lastName;
                    break;
                }
                default: {
                    identity = "Sir/Laday " + lastName;
                    break;
                }
            }
        }
        else if (lastName == "") {
            identity = firstName;
        }
        else {
            identity = firstName + " " + lastName;
        }
    }

    return identity;
}