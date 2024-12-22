import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Entypo, Feather } from '@expo/vector-icons';

interface SidebarProps {
  navigation: any;
}

const Sidebar: React.FC<SidebarProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/profile-icon-9.png" )}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Marwan Al Asadi</Text>
        <Text style={styles.handle}>@hisroyalfreshness</Text>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Files')}>
          <MaterialIcons name="folder" size={20} color="white" />
          <Text style={styles.menuText}>Files</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Roles')}>
          <MaterialIcons name="settings" size={20} color="white" />
          <Text style={styles.menuText}>Roles</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Calendar')}>
          <MaterialIcons name="calendar-today" size={20} color="white" />
          <Text style={styles.menuText}>Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Mentor')}>
          <FontAwesome5 name="chalkboard-teacher" size={20} color="white" />
          <Text style={styles.menuText}>Mentor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Team')}>
          <MaterialIcons name="group" size={20} color="white" />
          <Text style={styles.menuText}>Team</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Community')}>
          <FontAwesome5 name="users" size={20} color="white" />
          <Text style={styles.menuText}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Links')}>
          <Entypo name="link" size={20} color="white" />
          <Text style={styles.menuText}>Links</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Speeches')}>
          <Feather name="mic" size={20} color="white" />
          <Text style={styles.menuText}>Speeches</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Footer Items */}
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="settings" size={20} color="white" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HelpCenter')}>
          <MaterialIcons name="help-outline" size={20} color="white" />
          <Text style={styles.menuText}>Help Center</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Contact')}>
          <MaterialIcons name="call" size={20} color="white" />
          <Text style={styles.menuText}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SocialMedia')}>
          <Entypo name="network" size={20} color="white" />
          <Text style={styles.menuText}>Social Media</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  handle: {
    color: '#aaa',
  },
  menuContainer: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 15,
  },
});

export default Sidebar;
