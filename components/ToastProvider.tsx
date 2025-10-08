import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Spacing, Typography, BorderRadius } from '../constants/Theme';

type ToastOptions = {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number; // ms
};

type ToastContextType = {
  showToast: (opts: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastOptions | null>(null);
  const [visible, setVisible] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setToast(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const showToast = useCallback(({ message, type = 'info', duration = 3500 }: ToastOptions) => {
    setToast({ message, type, duration });
    setVisible(true);
    // auto hide
    setTimeout(() => setVisible(false), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast ? (
        <Animated.View pointerEvents="box-none" style={[styles.container, { opacity }]}> 
          <View style={[styles.toast, toast.type === 'error' ? styles.error : toast.type === 'success' ? styles.success : styles.info]}>
            <View style={[styles.indicator, toast.type === 'error' ? styles.indicatorError : toast.type === 'success' ? styles.indicatorSuccess : styles.indicatorInfo]} />
            <Text style={[
              styles.message,
              toast.type === 'success' ? styles.messageOnSuccess : toast.type === 'error' ? styles.messageOnError : styles.messageOnInfo,
            ]}>{toast.message}</Text>
            <TouchableOpacity onPress={() => setVisible(false)} accessibilityRole="button">
              <Text style={styles.dismiss}>×</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      ) : null}
    </ToastContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Spacing.xl,
    alignItems: 'center',
    zIndex: 9999,
  },
  toast: {
    maxWidth: '92%',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  message: {
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.base,
    flex: 1,
    marginRight: Spacing.md,
  },
  dismiss: {
    color: Colors.textPrimary,
    fontSize: 18,
    paddingHorizontal: Spacing.sm,
  },
  success: {
    backgroundColor: Colors.success,
  },
  error: {
    backgroundColor: Colors.error,
  },
  info: {
    backgroundColor: Colors.nightLight,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: Spacing.md,
  },
  indicatorSuccess: {
    backgroundColor: Colors.success,
  },
  indicatorError: {
    backgroundColor: Colors.error,
  },
  indicatorInfo: {
    backgroundColor: Colors.info,
  },
  messageOnSuccess: {
    color: Colors.nightDark,
    fontFamily: Typography.fontFamily.primary,
  },
  messageOnError: {
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.primary,
  },
  messageOnInfo: {
    color: Colors.textPrimary,
    fontFamily: Typography.fontFamily.primary,
  },
});

export default ToastProvider;
