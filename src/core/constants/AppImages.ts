import Calendar from '../../../assets/icons/Calendar.svg';
import Card from '../../../assets/icons/Card.svg';
import Logout from '../../../assets/icons/Logout.svg';
import Address from '../../../assets/icons/address.svg';
import Apple from '../../../assets/icons/apple.svg';
import ArrowFwdGrey from '../../../assets/icons/arrowFwdGrey.svg';
import BackArrow from '../../../assets/icons/back_arrow.svg';
import ChangePass from '../../../assets/icons/changePass.svg';
import ChangePasswordBannerImage from '../../../assets/icons/change_password_banner_image.svg';
import Clock from '../../../assets/icons/clock.svg';
import Contact from '../../../assets/icons/contact.svg';
import ContactUs from '../../../assets/icons/contact_us.svg';
import Cross from '../../../assets/icons/cross.svg';
import Delete from '../../../assets/icons/delete.svg';
import Edit from '../../../assets/icons/edit.svg';
import EditUser from '../../../assets/icons/editUser.svg';
import ErrorIcon from '../../../assets/icons/error.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Filter from '../../../assets/icons/filter.svg';
import GermanFlag from '../../../assets/icons/germanFlg.svg';
import Google from '../../../assets/icons/google.svg';
import HeartLiked from '../../../assets/icons/heartLiked.svg';
import HeartUnliked from '../../../assets/icons/heartUnliked.svg';
import HidePass from '../../../assets/icons/hidePass.svg';
import Home from '../../../assets/icons/home.svg';
import Listing from '../../../assets/icons/listing.svg';
import Location from '../../../assets/icons/location.svg';
import NoAdPosted from '../../../assets/icons/noAdPosted.svg';
import Notification from '../../../assets/icons/notification.svg';
import Notifications from '../../../assets/icons/notifications.svg';
import OpenLink from '../../../assets/icons/openLink.svg';
import Password from '../../../assets/icons/password.svg';
import Payment from '../../../assets/icons/payment.svg';
import PostAdd from '../../../assets/icons/postAdd.svg';
import Profile from '../../../assets/icons/profile.svg';
import ProfileContact from '../../../assets/icons/profileContact.svg';
import Search from '../../../assets/icons/search.svg';
import SearchPref from '../../../assets/icons/searchPref.svg';
import Share from '../../../assets/icons/share.svg';
import ShowPass from '../../../assets/icons/showPass.svg';
import Sms from '../../../assets/icons/sms.svg';
import Subscription from '../../../assets/icons/subscription.svg';
import Success from '../../../assets/icons/success.svg';
import UkFlag from '../../../assets/icons/ukFlg.svg';
import UploadImage from '../../../assets/icons/uploadImage.svg';

/** Central source for SVG components used throughout the app. */
export default class AppImages {
  // Social media icons
  static readonly appleIcon = Apple;
  static readonly facebookIcon = Facebook;
  static readonly googleIcon = Google;

  // User interface icons
  static readonly contactIcon = Contact;
  static readonly editUserIcon = EditUser;
  static readonly passwordIcon = Password;
  static readonly showPassIcon = ShowPass;
  static readonly hidePassIcon = HidePass;
  static readonly smsIcon = Sms;

  // Navigation and action icons
  static readonly searchBlackIcon = Search;
  static readonly home = Home;
  static readonly adsListingIcon = Listing;
  static readonly postAdIcon = PostAdd;
  static readonly profileIcon = Profile;
  static readonly backArrowIcon = BackArrow;
  static readonly shareIcon = Share;
  static readonly clock = Clock;
  static readonly heartLiked = HeartLiked;
  static readonly heartUnliked = HeartUnliked;

  // Settings icons
  static readonly profileContact = ProfileContact;
  static readonly searchPref = SearchPref;
  static readonly notification = Notification;
  static readonly subscription = Subscription;
  static readonly changePass = ChangePass;
  static readonly address = Address;
  static readonly arrowFwdGrey = ArrowFwdGrey;
  static readonly cross = Cross;

  static readonly germanFlag = GermanFlag;
  static readonly ukFlag = UkFlag;
  static readonly location = Location;
  static readonly filterBlueIcon = Filter;
  static readonly logOutIcon = Logout;

  static readonly successIcon = Success;
  static readonly errorIcon = ErrorIcon;
  static readonly changePasswordBannerImage = ChangePasswordBannerImage;
  static readonly noAdPosted = NoAdPosted;

  static readonly deleteAd = Delete;
  static readonly editAd = Edit;
  static readonly uploadImage = UploadImage;
  static readonly calendar = Calendar;
  static readonly paymentMethod = Payment;
  static readonly paymentCard = Card;
  static readonly notificationIcon = Notifications;
  static readonly openLink = OpenLink;
  static readonly contactUs = ContactUs;
}
