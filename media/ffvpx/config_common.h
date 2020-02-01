#ifndef MOZ_FFVPX_CONFIG_COMMON_H
#define MOZ_FFVPX_CONFIG_COMMON_H
#include "defaults_disabled.h"

#ifdef YASM_MISSING_AVX2
#undef HAVE_AVX2
#undef HAVE_AVX2_INTERNAL
#undef HAVE_AVX2_EXTERNAL
#define HAVE_AVX2 0
#define HAVE_AVX2_INTERNAL 0
#define HAVE_AVX2_EXTERNAL 0
#endif

#ifdef MOZ_LIBAV_FFT
#undef CONFIG_FFT
#undef CONFIG_RDFT
#define CONFIG_FFT 1
#define CONFIG_RDFT 1
#endif

#endif