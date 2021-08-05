export interface loginUser {
        userName: string;
        password: string;
        imeiOrIP: string;
        otp: string;
        tpin: string;

    }
   
    export interface loginResponse {
        Status:  string;
        Message: string;
        Result:  Result;
    }
    
    export interface Result {
        access_token:    string;
        token_type:      string;
        expires_in:      number;
        userName:        string;
        issued:          string;
        expires:         string;
        customerId:      string;
        branchId:        string;
        deviceIMEI:      string;
        fullName:        string;
        isFirstLogin:    boolean;
        auth2FAProvider: string;
        isquesEnable:    boolean;
    }
    