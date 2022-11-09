/* eslint-disable no-undef */
import { signInWithEmailAndPassword } from '../src/lib/exports.js';
// import {
//   signInGoogle, createAccount, loginWithUser, logout,
// } from '../src/lib/firebase-auth.js';
// import {
//   getDocs, getDoc, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword,
//   addDoc, getAuth, updateProfile, updateDoc, deleteDoc, doc, signOut,
// } from '../src/lib/export.js';
// import {
//   createPost, getPost, upDatePost, deletePost, getPostById, likePost,
// } from '../src/lib/firestore.js';

jest.mock('../src/lib/exports.js');

// beforeEach(() => {
//   jest.clearAllMocks();
// });

describe('signInWithEmailAndPassword', () => {
  it(' a função deve logar um usuario utilizando email e senha', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      email: {},
      password: {},
    });
    signInWithEmailAndPassword('amandinha@gmail.com', '123456');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

// describe('createAccount', () => {
// eslint-disable-next-line max-len
//   it('a função deve criar uma conta de usuário utilizando o seu nome, email e senha', async () => {
//     const mockGetAuth = {
//       currentUser: {},
//     };

//     getAuth.mockReturnValueOnce(mockGetAuth);
//     createUserWithEmailAndPassword.mockResolvedValueOnce();

//     const email = 'umnomequalquer@gmail.com';
//     const password = '12345678';
//     const name = 'umnomeai';
//     await createAccount(name, email, password);

//     expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
//     expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockGetAuth, email, password);
//     expect(updateProfile).toHaveBeenCalledTimes(1);
//     expect(updateProfile).toHaveBeenCalledWith(mockGetAuth.currentUser, {
//       displayName: name,
//     });
//   });
// });

// describe('signInGoogle', () => {
//   it('a função deve logar um usuário utilizando a sua conta do google', () => {
//     signInWithPopup.mockResolvedValue();
//     signInGoogle();
//     expect(signInWithPopup).toHaveBeenCalledTimes(1);
//   });
// });

// describe('logout', () => {
//   it(' a função deve deslogar o usuario', () => {
//     signOut.mockResolvedValue({
//       user: {},
//     });
//     logout();
//     expect(signOut).toHaveBeenCalledTimes(1);
//   });
// });

// describe('createPost', () => {
//   it(' a função deve criar um post', async () => {
//     const mockGetAuth = {
//       currentUser: {
//         displayName: 'nome',
//         uid: '123',
//       },
//     };

//     getAuth.mockReturnValueOnce(mockGetAuth);
//     addDoc.mockResolvedValue();

//     const texto = 'texto do meu post';
//     await createPost(texto);

//     expect(addDoc).toHaveBeenCalledTimes(1);
//     expect(addDoc).toHaveBeenCalledWith(undefined, {
//       name: mockGetAuth.currentUser.displayName,
//       author: mockGetAuth.currentUser.uid,
//       texto,
//       like: [],
//     });
//   });
// });

// describe('getPost', () => {
//   it('a função deve retornar um array com o post a ser printado na tela', () => {
//     getDocs.mockResolvedValue([{
//       author: {},
//       id: {},
//       like: [],
//       name: {},
//       texto: {},
//     }]);
// eslint-disable-next-line max-len
//     getPost('x4H2994HPjV9zm6cp7am58XTjci2', '0pRNd4MNFXm3QAI2TYeL', ['J5rtQSlAJqO13E7znQknbvC236U2', 'scbc2YPdX5gnlsKodSzDLh3mpPr2'], 'Tamyres melo', 'Parabéns, meninas. Achei incrível!');
//     expect(getDocs).toHaveBeenCalledTimes(1);
//   });
// });

// describe('upDatePost', () => {
//   it('a função deve atualizar um post', async () => {
//     const userId = 'id do usuario';
//     const postToBeEdited = 'texto a ser editada';

//     updateDoc.mockResolvedValue();

//     await upDatePost(userId, postToBeEdited);

//     expect(updateDoc).toHaveBeenCalledTimes(1);
//     expect(updateDoc).toHaveBeenCalledWith(undefined, {
//       texto: postToBeEdited,
//     });
//   });
// });

// describe('deletePost', () => {
//   it('a função deve deletar um post a partir do id do usuário', async () => {
//     const mockRef = {};
//     const mockPostCollection = {
//       posts: {
//         postId: 'blablabla',
//       },
//     };

//     doc.mockReturnValueOnce(mockRef);
//     deleteDoc.mockResolvedValueOnce(mockRef);

//     await deletePost(mockPostCollection.posts.postId);

//     expect(doc).toHaveBeenCalledTimes(1);
//     expect(doc).toHaveBeenCalledWith(undefined, 'post', mockPostCollection.posts.postId);
//     expect(deleteDoc).toHaveBeenCalledTimes(1);
//     expect(deleteDoc).toHaveBeenCalledWith(mockRef);
//   });
// });

// describe('getPostById', () => {
//   it('a função deve pegar o id de um post', async () => {
//     const id = 'abc123';
//     const ref = {};
//     const post = {
//       data: jest.fn(),
//     };

//     doc.mockReturnValueOnce(ref);
//     getDoc.mockResolvedValueOnce(post);

//     await getPostById(id);

//     expect(doc).toHaveBeenCalledTimes(1);
//     expect(doc).toHaveBeenCalledWith(undefined, 'post', id);
//     expect(getDoc).toHaveBeenCalledTimes(1);
//     expect(getDoc).toHaveBeenCalledWith(ref);
//     expect(post.data).toHaveBeenCalledTimes(1);
//   });
// });

// describe('likePost', () => {
//   it('a função deve adicionar like no post', async () => {
//     const mockPost = {
//       data() {
//         const likeArr = {
//           like: [],
//         };
//         return likeArr;
//       },
//     };

//     const postId = 'id do post';
//     const userId = 'id do usuario';

//     getDoc.mockResolvedValue(mockPost);

//     await likePost(postId, userId);
//     expect(updateDoc).toHaveBeenCalledTimes(1);
//     expect(updateDoc).toHaveBeenCalledWith(undefined, {
//       like: [userId],
//     });
//   });

//   it('a função deve remover o like do post', async () => {
//     const postId = 'id do post';
//     const userId = 'id do usuario';

//     const mockPost = {
//       data() {
//         const likeArr = {
//           like: [userId],
//         };
//         return likeArr;
//       },
//     };

//     getDoc.mockResolvedValue(mockPost);

//     await likePost(postId, userId);
//     expect(updateDoc).toHaveBeenCalledTimes(1);
//     expect(updateDoc).toHaveBeenCalledWith(undefined, {
//       like: [],
//     });
//   });
// });
