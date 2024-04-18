import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  //экшен
  "charapter/fetchUser",
  async (_, thunkAPI) => {
    //получаем данные с сервера промис
    try {
      const body = await fetch("http://localhost:4000/characters").then(
        (res) => {
          if (!res.ok) {
            throw new Error(
              `Could not fetch ${url}, status: ${res.status}, text: ${res.statusText}`
            ); //проверка на ошибку
          }
          return res.json(); //получаем данные в формате json
        }
      );

      return body;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message); //записываем ошибку
    }
  }
);

export const chapterSlice = createSlice({
  name: "chapter",
  initialState: {
    card: {},
    isLoading: false,
    data: null,
    error: "",
  },
  reducers: {
    like: (state, action) => {
      // console.log('like action', action.payload);
      // console.log('state', state);

      state.card[action.payload] = !state.card[action.payload];
    },
    dislike: (state, action) => {},

    // fetchCharacter(state) {
    //   state.isLoading = true; //загрузка
    // },
    // fetchCharacterResolve(state, action) {
    //   state.isLoading = false; //загрузка
    //   state.data = action.payload; //получаем данные с сервера
    //   state.error = ""; //записываем ошибку
    // },
    // fetchCharacterReject(state, action) {
    //   state.isLoading = false; //загрузка
    //   state.error = action.payload; //записываем ошибку
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = false; //загрузка
        // console.log("pending");
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false; //загрузка
        state.data = action.payload; //получаем данные с сервера
        state.error = ""; //записываем ошибку
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false; //загрузка
        state.error = action.payload; //записываем ошибку
      })
      .addDefaultCase((state, action) => {
        //по умолчанию
        // console.log("default");
      });
  },
  //   extraReducers: {
  //     [fetchUser.pending.type]: (state) => {
  //       state.isLoading = false; //загрузка
  //       console.log("pending");
  //     },
  //     [fetchUser.fulfilled.type]: (state, action) => {
  //       state.isLoading = false; //загрузка
  //       state.data = action.payload; //получаем данные с сервера
  //       state.error = ""; //записываем ошибку
  //     },
  //     [fetchUser.rejected.type]: (state, action) => {
  //       state.isLoading = false; //загрузка
  //       state.error = action.payload; //записываем ошибку
  //     },
  //   }
});

export const {
  like,
  dislike,
//   fetchCharacter,
//   fetchCharacterResolve,
//   fetchCharacterReject,
} = chapterSlice.actions;

export const cardSelector = (state) => state.chapter.card;

export const cardIsLoadingSelector = (state) => state.chapter.isLoading; //проверка
export const cardDataSelector = (state) => state.chapter.data;
export const cardErrorSelector = (state) => state.chapter.error;

// export const fetchCharacterThunk = () => async (dispatch) => {
//   //функция замыкающая экшен
//   dispatch(fetchCharacter());
//   try {
//     const body = await fetch("http://localhost:4000/characters").then((res) => {
//       if (!res.ok) {
//         throw new Error(
//           `Could not fetch ${url}, status: ${res.status}, text: ${res.statusText}`
//         ); //проверка на ошибку
//       }
//       return res.json(); //получаем данные в формате json
//     });
//     dispatch(fetchCharacterResolve(body)); //получаем данные с сервера
//     dispatch(fetchCharacterReject("")); //записываем ошибку
//   } catch (e) {
//     dispatch(fetchCharacterReject(e.message)); //записываем ошибку
//   }
// };

export default chapterSlice.reducer;
