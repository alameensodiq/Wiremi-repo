import {
    View,
    Text,
    SafeAreaView,
    StatusBar as RNStatusBar,
    Dimensions,
    TouchableOpacity,
    FlatList
  } from "react-native";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import Paypal from "../../assets/paypalcard.svg";
  import Venmo from "../../assets/venmocard.svg";
  import Wise from "../../assets/wise.svg";
  import GooglePay from "../../assets/googlepay.svg";
  import { StatusBar } from "expo-status-bar";
  import Caratdown from "../../assets/caratdown.svg";
  import CreditCards from "../../assets/creditcard.svg";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import DarkLongButton from "@/components/DarkLongButton";
  import CardText from "@/components/CardText";
  import ExpireDateLabel from "@/components/ExpireDateLabel";
  import CvvLabel from "@/components/CvvLabel";
  
  const EwalletCreditCard = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
  
    const optionSelect = [
      {
        title: "Paypal",
        image: <Paypal />
      },
      {
        title: "Venmo",
        image: <Venmo />
      },
      {
        title: "Wise",
        image: <Wise />
      },
      {
        title: "Google Pay",
        image: <GooglePay />
      }
    ];
  
    return (
      <View className="flex-1">
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingHorizontal: width * 0.03
          }}
          className="gap-6"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push('/TransactionDeposit/Ewallets')}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Credit Card</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <DarkLongButton onPress={() => console.log("sign")} />
          </View>
          <View className="flex-row items-center justify-between">
              <View style={{width: width * 0.35, backgroundColor:'#777A7E', height: height * 0.0009}}>
  
              </View>
              <Text className="font-bold">Or pay using</Text>
              <View style={{width: width * 0.35, backgroundColor:'#777A7E', height: height * 0.0009}}>
  
              </View>
          </View>
          <View className="flex-row gap-2">
            <View
              style={{
                height: height * 0.06,
                width: width * 0.25,
                borderRadius: 8,
                borderColor: "#EBEBEB",
                borderWidth: 1,
                flexDirection: "column",
                paddingLeft: width * 0.04,
                backgroundColor: "#FFFFFF", // Change to your desired background
                padding: 5
              }}
            >
              <CreditCards />
              <Text className="font-bold">Card</Text>
            </View>
            <FlatList
              data={optionSelect}
              keyExtractor={(item) => item.title}
              horizontal
              showsHorizontalScrollIndicator={false}
              className="rounded shadow-lg"
              contentContainerStyle={{ gap: 15, width: width * 1.3,height: height * 0.07}}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => console.log("routing to item location")}
                >
                  <View
                    style={{
                      height: height * 0.06,
                      width: width * 0.25,
                      borderRadius: 8,
                      flexDirection: "column",
                      paddingLeft: width * 0.04,
                      backgroundColor: "#EDE8E8", // Change to your desired background
                      padding: 5,
                      gap: 0.04
                    }}
                  >
                    {item.image}
                    <Text className="text-lighttextdark font-[13px]">
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-1"
          >
            <Text className="text-primary font-[14px]">Amount to pay</Text>
            <Text className="text-buttonprimary font-[14px]">$360</Text>
          </View>
          <View className="items-center justify-center">
              <CardText label='Card number' placeholder="0000 0000 0000 0000" />
          </View>
          <View className="flex-row items-center justify-between pl-2 pr-2">
              <ExpireDateLabel label='Expiry date' placeholder="02/27" />
              <CvvLabel label='CVV' placeholder="000" />
          </View>
          <View className="flex-col gap-3">
            <View className="mb-2 justify-start">
              <Text className="text-dark font-bold">Country or region</Text>
            </View>
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
              className="flex-row items-center justify-between p-2"
            >
              <Text className="text-lighttextdark font-[14px]">
                United States
              </Text>
              <Caratdown />
            </View>
            <View className="flex-row items-center justify-between pl-3">
              <Text className="text-lighttextdark font-[14px]">Zip code</Text>
            </View>
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Pay now"
              onPress={() => router.push('/TransactionDeposit/EwalletSuccess')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default EwalletCreditCard;
  