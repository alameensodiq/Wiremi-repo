import {
  View,
  Text,
  ImageBackground,
  //   SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  Pressable
} from "react-native";
import { Redirect, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import SearchLabelBox from "@/components/SearchLabelBox";
import { SafeAreaView } from "react-native-safe-area-context";
import PieChart from "react-native-pie-chart";
import RightCarat from "../../assets/rightcarat.svg";
import Arrow from "../../assets/greenarrowup.svg";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { SavingActive } from "@/Store/Apis/SavingActive";
import { clearStatesaveactive } from "@/Store/Reducers/SavingActive";
import { clearStategetgroupsaving } from "@/Store/Reducers/GetGroupSaving";
import { clearStategetsaving } from "@/Store/Reducers/GetSaving";
import { useAppContext } from "@/Context/useAppContext";
import { clearStatesavedashboard } from "@/Store/Reducers/SavingDashboard";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

interface DataItem {
  name: string;
  amount: number;
  progress: number;
  group: boolean;
  date: Date;
  id: number;
}

interface TransformedData {
  title: string;
  data: any[];
}

const SavingInstance = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const { saveactive, authenticatingsaveactive } = useAppSelector(
    (state) => state.saveactive
  );

  console.log(saveactive);

  const { getgroupsaving, authenticatinggetgroupsaving } = useAppSelector(
    (state) => state.getgroupsaving
  );

  console.log(getgroupsaving);

  const { getsaving, authenticatinggetsaving } = useAppSelector(
    (state) => state.getsaving
  );

  console.log(getsaving);

  const { isAuthenticated, checkUser } = useAppContext();
  if (isAuthenticated === undefined || isAuthenticated === null) {
    // return <Redirect href="/Auth/SignInPage" />;
    return router.push("/Auth/SignInPage");
  }

  useEffect(() => {
    dispatch(SavingActive({ router: router.push }));
    dispatch(clearStatesaveactive());
    dispatch(clearStategetgroupsaving());
    dispatch(clearStategetsaving());
    dispatch(clearStatesavedashboard());

    return () => {
      dispatch(clearStatesaveactive());
      dispatch(clearStategetgroupsaving());
      dispatch(clearStategetsaving());
      dispatch(clearStatesavedashboard());
    };
  }, []);

  const DATA = [
    {
      title: "Today",
      data: ["Apple", "Banana", "Orange", "Mango"]
    },
    {
      title: "Tomorrow",
      data: ["Carrot", "Broccoli", "Spinach"]
    }
  ];

  const transformData = (responseData: any): TransformedData[] => {
    // Check if responseData is valid and has the expected structure
    if (
      !responseData ||
      typeof responseData !== "object" ||
      !responseData.data ||
      typeof responseData.data !== "object"
    ) {
      console.error("Invalid responseData format:", responseData);
      return [];
    }

    // Transform the data into the desired format
    return Object.keys(responseData.data).map((key) => ({
      title: key,
      data: Array.isArray(responseData.data[key]) ? responseData.data[key] : []
    }));
  };

  const sections = transformData(
    saveactive && Object.keys(saveactive).length > 0 ? saveactive : { data: {} }
  );

  const series2 = [721, 100];
  const sliceColor2 = ["#105CE2", "#E9EBF3"];
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.05
        }}
        className="gap-6"
      >
        {!saveactive?.data && (
          <View
            style={{ height: height, width: width, flex: 1 }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Save")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Saving instances</Text>
          <Text></Text>
        </View>
        <View className="flex-row">
          <SearchLabelBox placeholder="Search" />
        </View>
        <View style={{ height: height * 0.72 }}>
          <SectionList
            scrollEnabled={true}
            sections={sections || []}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item?.name}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  if (item?.group) {
                    router.push(`/Save/GroupSavingsSummary?id=${item?.id}`);
                  } else {
                    router.push(`/Save/RegularSavingsSummary?id=${item?.id}`);
                  }
                }}
              >
                <View className="flex-col gap-2">
                  <View className="flex-row items-center justify-between pl-3">
                    <View className="flex-row gap-1">
                      <PieChart
                        widthAndHeight={70}
                        series={[item?.progress, 100 - item?.progress]}
                        sliceColor={sliceColor2}
                        coverRadius={0.65}
                      />
                      <View className="flex-col gap-1">
                        <View className="flex-row gap-1">
                          <Text
                            className="text-[14px]"
                            style={{ color: "#413D43" }}
                          >
                            {item?.name}
                          </Text>
                          <Text
                            className="text-[14px]"
                            style={{ color: "#00091E" }}
                          >
                            -${item?.amount}
                          </Text>
                        </View>
                        {/* <View className="flex-row gap-2 items-center">
                        <Text
                          style={{ color: "#6E6E6E" }}
                          className="text-[10px]"
                        >
                          +$180.33
                        </Text>
                        <View className="flex-row">
                          <Text
                            style={{ color: "#00A85A" }}
                            className="text-[10px]"
                          >
                            2.3%
                          </Text>
                          <Arrow />
                        </View>
                      </View> */}
                      </View>
                    </View>
                    <RightCarat />
                  </View>
                </View>
              </Pressable>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="text-[12px] text-sectionheader">{title}</Text>
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 16
                }}
              />
            )}
            contentContainerStyle={{
              // gap: 50,
              paddingHorizontal: width * 0.03
            }}
            SectionSeparatorComponent={() => (
              <View
                style={{
                  height: 26
                }}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SavingInstance;
