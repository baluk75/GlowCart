import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'expo-router';
import { User, MapPin, Clock, Globe, Bell, MessageCircle, CircleHelp as HelpCircle, Shield, FileText, LogOut, ChevronRight } from 'lucide-react-native';

interface SettingsItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Sign Out', 
          style: 'destructive',
          onPress: () => {
            logout();
            router.replace('/onboarding');
          }
        },
      ]
    );
  };

  const settingsItems: SettingsItem[] = [
    {
      id: 'address',
      title: 'Address',
      icon: <MapPin size={24} color="#666" />,
      onPress: () => Alert.alert('Address', 'Address management coming soon!'),
    },
    {
      id: 'order-history',
      title: 'Order History',
      icon: <Clock size={24} color="#666" />,
      onPress: () => Alert.alert('Order History', 'Order history coming soon!'),
    },
    {
      id: 'language',
      title: 'Language',
      icon: <Globe size={24} color="#666" />,
      onPress: () => Alert.alert('Language', 'Language settings coming soon!'),
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: <Bell size={24} color="#666" />,
      onPress: () => Alert.alert('Notifications', 'Notification settings coming soon!'),
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <MessageCircle size={24} color="#666" />,
      onPress: () => Alert.alert('Contact Us', 'Email: support@glowcart.com\nPhone: +1 (555) 123-4567'),
    },
    {
      id: 'help',
      title: 'Get Help',
      icon: <HelpCircle size={24} color="#666" />,
      onPress: () => Alert.alert('Get Help', 'Help center coming soon!'),
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: <Shield size={24} color="#666" />,
      onPress: () => Alert.alert('Privacy Policy', 'Privacy policy coming soon!'),
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: <FileText size={24} color="#666" />,
      onPress: () => Alert.alert('Terms & Conditions', 'Terms and conditions coming soon!'),
    },
  ];

  const renderSettingsItem = ({ item }: { item: SettingsItem }) => (
    <TouchableOpacity style={styles.settingsItem} onPress={item.onPress}>
      <View style={styles.settingsItemLeft}>
        {item.icon}
        <Text style={styles.settingsItemText}>{item.title}</Text>
      </View>
      <ChevronRight size={20} color="#BDBDBD" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <User size={40} color="#E91E63" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user?.name || 'User'}</Text>
            <Text style={styles.userEmail}>{user?.email || 'user@example.com'}</Text>
          </View>
        </View>

        {/* Settings List */}
        <View style={styles.settingsContainer}>
          <FlatList
            data={settingsItems}
            renderItem={renderSettingsItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={24} color="#D32F2F" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    paddingBottom: 100,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212121',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#9E9E9E',
  },
  settingsContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingsItemText: {
    fontSize: 16,
    color: '#424242',
    marginLeft: 16,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFCDD2',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D32F2F',
    marginLeft: 12,
  },
});