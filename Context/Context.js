import React, { useEffect, useState, createContext, useContext } from "react";
// Firebase
import { FIREBASE_DATA, FIREBASE_FIRESTORE } from "../Firebase/FirebaseConfig";
import { ref, onValue, set, push } from "firebase/database";
// Fire store
import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";


export const AuthContext = createContext(null);
export const ColorContext = createContext(null);
export const ExpertContext = createContext(null);
export const ItemContext = createContext(null);
// export const ChatContext = createContext(null);

export const AppProvider = ({ children }) => {
	// Router get params
	// const route = useRoute();
	// Theme
	const bgcItemCard = '#2e373c';
	const textColorItemCard = '#fff0ff';
	const bgcUpgradeCard = '#332352';
	// User
	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSignedIn, setIsSignedIn] = useState(false);
	
	// Get Sexual expert
	const db = FIREBASE_FIRESTORE;
	const [sexualExpert, setSexualExpert] = useState([]);
	const [dermatologistExpert, setDermatologistExpert] = useState([]);
	const [mentalHealthExpert, setMentalHealthExpert] = useState([]);
	useEffect(() => {
		// Get Sexual expert
		const getSexualExpert = async () => {
			try {
				const ref = collection(db, "chat/expert/sexualHealth/");
				const query = await getDocs(ref);
				const data = query.docs.map((doc) => doc.data());
				setSexualExpert(data);
				// console.log("Sexual expert data:", data);
				// console.log('User list:', expert )
			} catch (error) {
				console.log(error);
			}
		};
		getSexualExpert();

		// Get Dermatologist
		const getDermatologistExpert = async () => {
			try {
				const ref = collection(db, "chat/expert/dermatologist/");
				const query = await getDocs(ref);
				const data = query.docs.map((doc) => doc.data());
				setDermatologistExpert(data);
				// console.log("Dermatologist expert data:", data);
				// console.log('User list:', expert )
			} catch (error) {
				console.log(error);
			}
		};
		getDermatologistExpert();

		// Get Mental health expert
		const getMentalHealthExpert = async () => {
			try {
				const ref = collection(db, "chat/expert/mentalHealth/");
				const query = await getDocs(ref);
				const data = query.docs.map((doc) => doc.data());
				setMentalHealthExpert(data);
				// console.log("Mental health expert data:", data);
				// console.log('User list:', expert )
			} catch (error) {
				console.log(error);
			}
		};
		getMentalHealthExpert();
	}, []);

	// Edu
	const [eduSexual, setEduSexual] = useState([]);
	const [eduMentality, setEduMentality] = useState([]);
	const [eduSelfGrowth, setEduSelfGrowth] = useState([]);

	useEffect(() => {
		const eduSexual = async () => {
			try {
				const eduRef = collection(db, "edu_sexual");
				const querySnapshot = await getDocs(eduRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setEduSexual(data);

			} catch (error) {
				console.error("Error fetching podcast data:", error);
			}
		};

		eduSexual();
		//
		const eduMentality = async () => {
			try {
				const eduRef = collection(db, "edu_mentality");
				const querySnapshot = await getDocs(eduRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setEduMentality(data);
			} catch (error) {
				console.error("Error fetching podcast data:", error);
			}
		};

		eduMentality();
		//
		const eduSelfGrowth = async () => {
			try {
				const eduRef = collection(db, "edu_selfGrowth");
				const querySnapshot = await getDocs(eduRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setEduSelfGrowth(data);
			} catch (error) {
				console.error("Error fetching podcast data:", error);
			}
		};

		eduSelfGrowth();
	}, []);

	// Shop All
	const [bestSell, setBestSell] = useState([]);
	const [forYou, setForYou] = useState([]);
	const [top10, setTop10] = useState([]);
	// Book
	const [book18, setBook18] = useState([]);
	const [book17, setBook17] = useState([]);
	// Clothes
	const [tee, setTee] = useState([]);
	const [pant, setPant] = useState([]);
	const [sneaker, setSneaker] = useState([]);

	useEffect(() => {
		const bestSell = async () => {
			try {
				const eduRef = collection(db, "/shop/shopAll/bestSell");
				const querySnapshot = await getDocs(eduRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setBestSell(data);
			} catch (error) {
				console.error("Error fetching shop all data:", error);
			}
		};
		bestSell();

		//
		const forYou = async () => {
			try {
				const eduRef = collection(db, "/shop/shopMedicine/bestSell");
				const querySnapshot = await getDocs(eduRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setForYou(data);
			} catch (error) {
				console.error("Error fetching shop for u data:", error);
			}
		};
		forYou();

		// 
		const top10 = async () => {
			try {
				const eduRef = collection(db, "/shop/shopTool/bestSell");
				const querySnapshot = await getDocs(eduRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setTop10(data);
			} catch (error) {
				console.error("Error fetching shop top 10 data:", error);
			}
		};
		top10();
		// 
		const getBook18 = async () => {
			try {
				const ref = collection(db, "/shop/shopBook/18+");
				const querySnapshot = await getDocs(ref);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setBook18(data);
			} catch (error) {
				console.error("Error fetching shop Book 18+ data:", error);
			}
		};
		getBook18();
		// 
		const getBook17 = async () => {
			try {
				const ref = collection(db, "/shop/shopBook/18-");
				const querySnapshot = await getDocs(ref);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setBook17(data);
			} catch (error) {
				console.error("Error fetching shop Book 18- data:", error);
			}
		};
		getBook17();
		// 
		const getTee = async () => {
			try {
				const ref = collection(db, "/shop/shopClothes/tee");
				const querySnapshot = await getDocs(ref);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setTee(data);
			} catch (error) {
				console.error("Error fetching tee:", error);
			}
		};
		getTee();
		// 
		const getPant = async () => {
			try {
				const ref = collection(db, "/shop/shopClothes/pant");
				const querySnapshot = await getDocs(ref);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setPant(data);
			} catch (error) {
				console.error("Error fetching pant:", error);
			}
		};
		getPant();
		// 
		const getSneaker = async () => {
			try {
				const ref = collection(db, "/shop/shopClothes/sneaker");
				const querySnapshot = await getDocs(ref);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setSneaker(data);
			} catch (error) {
				console.error("Error fetching sneaker:", error);
			}
		};
		getSneaker();
	}, []);

	// Podcast
	const [podcast1, setPodcast1] = useState([]);
	const [podcast2, setPodcast2] = useState([]);
	const [podcast3, setPodcast3] = useState([]);
	useEffect(() => {
		const getPodcast1 = async () => {
			try {
				const podcastRef = collection(db, "podcast");
				const querySnapshot = await getDocs(podcastRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setPodcast1(data);
			} catch (error) {
				console.error("Error fetching podcast data:", error);
			}
		};

		getPodcast1(); // Call the function within useEffect

		const getPodcast2 = async () => {
			try {
				const podcast2Ref = collection(db, "podcast2");
				const querySnapshot = await getDocs(podcast2Ref);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setPodcast2(data);
			} catch (error) {
				console.error("Error fetching podcast data:", error);
			}
		};

		getPodcast2(); // Call the function within useEffect

		const getPodcast3 = async () => {
			try {
				const podcast3nRef = collection(db, "podcast3");
				const querySnapshot = await getDocs(podcast3nRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setPodcast3(data);
			} catch (error) {
				console.error("Error fetching podcast data:", error);
			}
		};

		getPodcast3(); // Call the function within useEffect
	}, []);

	// Chat real time
	const rtdb = FIREBASE_DATA;
	// Send mess
	// const [mess, setMess] = useState('');
	// const sendMessage = async () => {
	// 	try {
	// 		const messRef = ref(rtdb, 'chat/');
	// 		mess === '' 
	// 		? setMess('')
	// 		: await set(messRef, {mess: mess});
	// 	} catch (error) {
	// 		console.error('Error sending message:', error);
	// 	}
	// 	setMess('');
	// };
	
	// Get mess
	// const [messList, setMessList] = useState([]);
	// useEffect(() => {
	// 	const getMess = async () => {
	// 		try{
	// 		const listRef = ref(rtdb, "chat/mess/");
	// 		onValue(listRef, (snapshot) => {
	// 		const data = snapshot.val();
	// 		setMessList(data);
	// 		console.log('Mess list:', messList.map(x => x));
	// 		});
	// 	} catch (error) {
	// 		console.error('Error getting mess:', error);
	// 	}
	// 	};
	// 	getMess();
	//  }, []);

	const [video, setVideo] = useState([]);
	useEffect(() => {
		const getVideo = async () => {
         try {
            const videoRef = collection(db, "video/");
            const querySnapshot = await getDocs(videoRef);
            const data = querySnapshot.docs.map((doc) => doc.data());
            setVideo(data);
				// console.log('video data: ', data);
         } catch (error) {
            console.error("Error fetching video data:", error);
         }
      };
		getVideo();
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading, isSignedIn, setIsSignedIn }}>
			<ColorContext.Provider value={{ bgcItemCard, textColorItemCard }}>
				<ItemContext.Provider value={{ eduSexual, eduMentality, eduSelfGrowth, bestSell, forYou, top10, book17, book18, tee, pant, sneaker, podcast1, podcast2, podcast3, video }}>
					<ExpertContext.Provider value={{ sexualExpert, dermatologistExpert, mentalHealthExpert }}>
						{children}
					</ExpertContext.Provider>
				</ItemContext.Provider>
			</ColorContext.Provider>
		</AuthContext.Provider>
	)
}

