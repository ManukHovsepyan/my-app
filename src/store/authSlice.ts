import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string,
	surname: string,
	country: string,
	date: Date | "",
	email: string,
	phone: number | "",
	userName: string,
	password: string,
	countryFullName: string | ""
}

export interface AuthState {
  user: User | null,
  loading: boolean,
  error: any,
  isUserLoggedIn: boolean,

}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isUserLoggedIn: false
}

const base_url = process.env.REACT_APP_BASE_URL
export const registrationUser: any = createAsyncThunk('/auth/registrationUser', async (formData : User) => {
	try {
    const response = await fetch(`${base_url}/auth/registration`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to register');
    }

    const data = await response.json();
    localStorage.setItem('jwtToken', data.data.accessToken);
    return data;
  } catch (error : any) {
		console.log(error, "errr")
  }
});

export const loginUser: any = createAsyncThunk('/auth/loginUser', async (formData : any) => {
  try {
    const response = await fetch(`${base_url}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if(!response.ok) {
      throw new Error('Failed to Login')
    }
    const data = await response.json()

    if(data.status === "success"){
      localStorage.setItem('jwtToken', data.data.accessToken);
    }
    return data
  } catch(error : any) {
    console.log(error)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registrationStart(state) {
      state.loading = true;
      state.error = null;
    },
		registrationSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
		registrationFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loading = false;
      state.isUserLoggedIn = true;
      state.error = null;
    });
  },
});


export const { registrationStart, registrationSuccess, registrationFailure } = authSlice.actions;
export default authSlice.reducer