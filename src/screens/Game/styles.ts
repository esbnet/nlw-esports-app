import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
  },

  logo: {
    width: 72,
    height: 40,
  },

  right: {
    width: 20,
    height: 20,
  },

  banner: {
    width: 260,
    height: 140,
    borderRadius: 8,
    borderColor: THEME.COLORS.CAPTION_500,
    borderWidth: 1,
    marginTop: 10,
    opacity: 0.45,
  },

  containerList: {
    width: '100%',
  },

  contentList: {
    paddingLeft: 16,
    paddingRight: 64,
    alignItems: 'flex-start',
  },
  emptyListAd: {
    color: THEME.COLORS.CAPTION_400,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
