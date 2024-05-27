import { StyleSheet } from 'react-native';

export const HomeViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  heading: {
    textAlign: 'center',
    color: '#0034a5',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  activeButton: {
    userSelect: 'none',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 40,
    paddingLeft: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderColor: '#e49504',
  },
  idleBtn: {
    userSelect: 'none',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 40,
    paddingLeft: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'green',
    color: 'green',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  activeBtnText: {
    color: '#e49504',
    fontSize: 20,
  },
  idleBtnText: {
    color: 'green',
    fontSize: 20,
  },
  oooBtn: {
    textAlign: 'center',
    color: '#0034a5',
    fontWeight: '500',
    fontSize: 20,
  },
});
