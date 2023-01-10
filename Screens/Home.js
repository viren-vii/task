import {
  NativeBaseProvider,
  extendTheme,
  Text,
  Center,
  VStack,
  Box,
  Divider,
  Heading,
  Input,
  Icon,
  ScrollView,
  HStack,
  Alert,
  Avatar,
  Button,
  View,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import ScrollIndicator from 'react-native-custom-scroll-indicator';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const usersArray = [
  {
    name: 'Megha',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    light: 'primary.100',
    dark: 'primary.700',
  },
  {
    name: 'Sahil',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    light: 'amber.100',
    dark: 'amber.700',
  },
  {
    name: 'Ashna',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    light: 'green.100',
    dark: 'green.700',
  },
  {
    name: 'Ravi',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
    light: 'pink.100',
    dark: 'pink.700',
  },
  {
    name: 'Jay',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    light: 'blue.100',
    dark: 'blue.700',
  },
];

const celebrationArray = [
  {
    name: 'Megha',
    role: 'UX Designer',
    occasion: 'Birthday',
    profile:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    light: 'primary.100',
    dark: 'primary.700',
  },
  {
    name: 'Sahil',
    role: 'UX Designer',
    occasion: 'Marriage Anniversary',
    profile:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    light: 'amber.100',
    dark: 'amber.700',
  },
  {
    name: 'Ashna',
    role: 'UX Designer',
    occasion: 'Work Anniversary',
    profile:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    light: 'green.100',
    dark: 'green.700',
  },
  {
    name: 'Ravi',
    role: 'UX Designer',
    occasion: "Kid's Birthday",
    profile:
      'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
    light: 'pink.100',
    dark: 'pink.700',
  },
];

const myTeamArray = [
  {
    name: 'Megha',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    status: 'Present',
  },
  {
    name: 'Sahil',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    status: 'Present',
  },
  {
    name: 'Ashna',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    status: 'Present',
  },
  {
    name: 'Ravi',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
    status: 'Present',
  },
  {
    name: 'Jay',
    role: 'UX Designer',
    joined: 'Joined Today',
    profile:
      'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    status: 'Absent',
  },
];

const tasksArray = [
  {
    task: 'Attendance',
    number: 17,
    border: 'purple.200',
  },
  {
    task: 'Leave',
    number: 8,
    border: 'green.200',
  },
  {
    task: 'Job Offers',
    number: 11,
    border: 'orange.200',
  },
  {
    task: 'Interview Schedule',
    number: 4,
    border: 'pink.200',
  },
];

const announcementsArray = [
  {
    status: 'success',
    data: 'Selection successfully moved!',
  },
  {
    status: 'error',
    data: 'Please try again later!',
  },
  {
    status: 'info',
    data: 'We are going live in July!',
  },
  {
    status: 'warning',
    data: 'Poor internet connection.',
  },
];
function SearchBar() {
  return (
    <VStack my="4" space={5} w="100%" maxW="300px">
      <Input
        placeholder="Search"
        variant="filled"
        width="100%"
        borderRadius="10"
        py="1"
        px="2"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </VStack>
  );
}

function Announcement({data, status}) {
  return (
    <Center style={{marginRight: 20}}>
      <Alert
        maxW="250"
        status={status}
        colorScheme="info"
        style={{borderRadius: 10}}>
        <HStack flexShrink={1} space={2} alignItems="center">
          <Alert.Icon />
          <Text
            isTruncated={true}
            fontSize="md"
            fontWeight="medium"
            color="coolGray.800">
            {data}
          </Text>
        </HStack>
      </Alert>
    </Center>
  );
}

function AnnouncementBlock() {
  return (
    <>
      <HStack space={250} justifyContent="space-around">
        <Text style={{fontWeight: '900'}}>Announcements</Text>
        <Text
          style={{
            fontWeight: '300',
            textDecorationLine: 'underline',
            color: '#00ab55',
          }}>
          View All
        </Text>
      </HStack>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{marginTop: 10, padding: 10}}>
        {announcementsArray.map((announcement, i) => {
          return (
            <Announcement
              key={i}
              data={announcement.data}
              status={announcement.status}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

function User({name, role, joined, light, dark, profile}) {
  return (
    <Center
      mr={7}
      borderRadius={20}
      bg={light}
      borderColor={dark}
      borderWidth={0.5}
      _text={{
        color: 'white',
        fontWeight: 'bold',
      }}
      height="40"
      width="32">
      <VStack>
        <Center>
          <Avatar
            size={'lg'}
            source={{
              uri: profile,
            }}>
            AJ
          </Avatar>
          <Text fontSize={'xl'} color={dark}>
            {name}
          </Text>
          <Text fontSize={'lg'} color={'gray.400'}>
            {role}
          </Text>
          <Text fontSize={'md'} color={'gray.400'}>
            {joined}
          </Text>
        </Center>
      </VStack>
    </Center>
  );
}

function UserBlock() {
  return (
    <ScrollIndicator
      indicatorBgPadding={6}
      viewBoxStyle={{
        alignItems: 'center',
        marginTop: 60,
        flex: 1,
      }}
      scrollViewBoxStyle={{
        width: undefined,
      }}
      indicatorBackgroundStyle={{
        height: 15,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#aed0bf',
      }}
      indicatorStyle={{
        height: 15,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#00ab55',
      }}
      indicatorBoxStyle={{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {usersArray.map((user, i) => {
        return (
          <User
            key={i}
            name={user.name}
            role={user.role}
            joined={user.joined}
            light={user.light}
            dark={user.dark}
            profile={user.profile}
          />
        );
      })}
    </ScrollIndicator>
  );
}

function ClockInBlock() {
  return (
    <Center>
      <HStack space={3}>
        <Icon size="10" color="#0089c8" as={<AntDesign name="clockcircle" />} />
        <VStack h={10} w={32}>
          <Center>
            <Text>03/01/23</Text>
            <Text>Clock In hh:mm AM</Text>
            <Text>Clock Out hh:mm PM</Text>
          </Center>
        </VStack>
        <Center>
          <Button background={'#0089c8'} h={10} w={20} borderRadius={15}>
            <Text color={'#fff'}>Clock In</Text>
          </Button>
        </Center>
        <Center>
          <Icon
            size="5"
            color={'gray.400'}
            as={<MaterialIcons name="arrow-forward-ios" />}
          />
        </Center>
      </HStack>
    </Center>
  );
}

function MyTeamElement({profile, name, role, status}) {
  return (
    <HStack space={3}>
      <Avatar
        size={'lg'}
        source={{
          uri: profile,
        }}>
        AJ
      </Avatar>
      <Center w={20}>
        <Text>{name}</Text>
      </Center>
      <Center w={20}>
        <Text color={'gray.500'}>{role}</Text>
      </Center>
      <HStack space={2} w={20}>
        <Center>
          <Icon
            size="3"
            color={'#00ab55'}
            as={<MaterialIcons name="circle" />}
          />
        </Center>
        <Center>
          <Text color={'gray.500'}>{status}</Text>
        </Center>
      </HStack>
    </HStack>
  );
}

function MyTeamBlock() {
  return (
    <Center
      background={'white'}
      border="1"
      borderRadius="15"
      borderColor="coolGray.200"
      borderWidth="1"
      mx="4"
      my="2"
      p={2}
      shadow={1}>
      <VStack space="4" px={3}>
        <HStack p={5} space={250} justifyContent="space-around">
          <Text style={{fontWeight: '900'}}>My Team</Text>
          <Text
            style={{
              fontWeight: '300',
              textDecorationLine: 'underline',
              color: '#00ab55',
            }}>
            View All
          </Text>
        </HStack>
        {myTeamArray.map((mate, i) => {
          return (
            <MyTeamElement
              key={i}
              name={mate.name}
              profile={mate.profile}
              role={mate.role}
              status={mate.status}
            />
          );
        })}
      </VStack>
    </Center>
  );
}

function QuickLinksBlock() {
  return (
    <Center
      background={'white'}
      border="1"
      borderRadius="15"
      borderColor="coolGray.200"
      borderWidth="1"
      mx="4"
      my="2"
      p={2}
      shadow={1}>
      <VStack space="4" pt={2}>
        <Text style={{fontWeight: '900'}}>Quick Links</Text>
        <HStack p={2} px={5} space={100} justifyContent="space-around">
          <HStack background={'#e9f8ff'} p={4} mx={2} borderRadius={8}>
            <Text>Holiday {'\n'}Calendar</Text>
            <Icon
              size="4"
              color={'gray.400'}
              as={<Feather name="arrow-up-right" />}
            />
          </HStack>
          <HStack background={'#e9f8ff'} p={4} mx={2} borderRadius={8}>
            <Text>Leave {'\n'}Policy</Text>
            <Icon
              size="4"
              color={'gray.400'}
              as={<Feather name="arrow-up-right" />}
            />
          </HStack>
          <HStack background={'#e9f8ff'} p={4} mx={2} borderRadius={8}>
            <Text>Payroll {'\n'}Manual</Text>
            <Icon
              size="4"
              color={'gray.400'}
              as={<Feather name="arrow-up-right" />}
            />
          </HStack>
        </HStack>
      </VStack>
    </Center>
  );
}

function CelebrationElement({occasion, profile, name, light, dark}) {
  return (
    <HStack
      background={light}
      h={'70'}
      px={2}
      borderRadius={15}
      space={30}
      my={2}>
      <Center w={70}>
        <Text>{occasion}</Text>
      </Center>
      <Center>
        <Avatar
          size={'xl'}
          source={{
            uri: profile,
          }}>
          AJ
        </Avatar>
      </Center>
      <Center>
        <Text color={dark} fontSize={'2xl'}>
          {name}
        </Text>
      </Center>

      <Center>
        <Icon
          size="5"
          color={'gray.400'}
          as={<MaterialIcons name="arrow-forward-ios" />}
        />
      </Center>
    </HStack>
  );
}

function CelebrationsBlock() {
  return (
    <Center
      background={'white'}
      border="1"
      borderRadius="15"
      borderColor="coolGray.200"
      borderWidth="1"
      mx="4"
      my="2"
      p={2}
      shadow={1}>
      <VStack space="4" py={5}>
        <Text style={{fontWeight: '900'}}>Celebrations</Text>
        {celebrationArray.map((cel, i) => {
          return (
            <CelebrationElement
              key={i}
              occasion={cel.occasion}
              name={cel.name}
              profile={cel.profile}
              dark={cel.dark}
              light={cel.light}
            />
          );
        })}
      </VStack>
    </Center>
  );
}

function TaskElement({task, number, border}) {
  return (
    <Center borderWidth={1} borderColor={border} p={5} borderRadius={10}>
      <HStack space={'70'}>
        <Text w={100}>{task}</Text>
        <Text>{number}</Text>
        <Text
          style={{
            fontWeight: '300',
            textDecorationLine: 'underline',
            color: '#00ab55',
          }}>
          View
        </Text>
      </HStack>
    </Center>
  );
}

function MyTasksBlock() {
  return (
    <Center
      background={'white'}
      border="1"
      borderRadius="15"
      borderColor="coolGray.200"
      borderWidth="1"
      mx="4"
      my="2"
      p={2}
      shadow={1}>
      <VStack space="4" py={5}>
        <Text style={{fontWeight: '900'}}>My Tasks</Text>
        {tasksArray.map((task, i) => {
          return (
            <TaskElement
              key={i}
              task={task.task}
              number={task.number}
              border={task.border}
            />
          );
        })}
      </VStack>
    </Center>
  );
}

// extend the theme
export default function HomeScreen() {
  return (
    // pass itto NativeBaseProvider
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Center flex={1} px="2" py="10" background={'gray.200'}>
        <SearchBar />
        <AnnouncementBlock />
      </Center>

      <Center
        flex={1}
        px="2"
        p={10}
        background={'gray.200'}
        borderBottomRadius={60}
        mt="1">
        <Text fontSize={'3xl'}>Welcome</Text>
        <UserBlock />
      </Center>
      <Center
        flex={1}
        px="2"
        py="5"
        m="10"
        background={'#e9f8ff'}
        borderRadius="3xl">
        <ClockInBlock />
      </Center>
      <MyTeamBlock />
      <QuickLinksBlock />
      <CelebrationsBlock />
      <MyTasksBlock />
    </ScrollView>
  );
}
