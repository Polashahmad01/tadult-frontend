<template>
  <div class="container-xl">
    <form class="card" @submit.prevent="createNewUserWithEmailAndPassword">
      <p>Welcome to <span>TAdult</span></p>
      <h1>Sign up as a user</h1>
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input v-model="fullName" type="text" name="fullName">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="userName" type="text" name="username">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" name="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" :type="passwordType" name="password">
        <svg v-if="isShowPassword" class="password-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="toggleShowPassword">
          <rect width="25" height="25" />
          <rect width="25" height="25" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_0_1" transform="scale(0.00195312)"/>
          </pattern>
          <image id="image0_0_1" width="512" height="512" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>

        <svg v-else class="password-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="toggleShowPassword">
          <rect width="25" height="25"/>
          <rect width="25" height="25" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_0_1" transform="scale(0.00195312)"/>
          </pattern>
          <image id="image0_0_1" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d15mCdVfe/xd88+wzLDvsMMOyKIghAWQ4KoKBoUhSi5wS2iCSohiuR6s3h9vARj3CJRvGpiiEsEIyCKCmJQWaKAURZZhnVmYAaYYZlhHWbJH6dbmraXX3dX1bdOnffreT4P63SdX/2q61vnVJ1TfUiSpLabBhwKHA0cDGwFbNv/3+4DlgFXA98FrgLWBLRRkiRVZDbwfuABYH2PeQB4X/+flSRJmXkjsITeC//QLAaOb7zVkiRpQqYCZzPxwj80n+3/mZIkqaVmAN+iuuI/kG/iRYAkSa00A7iA6ov/4JEASZLUInUX/4H4TIAkSS0xHTif+ov/euBenB0gSVK4Jov/QP6ikU8mSZKG1dSw/9DcT1pYSJIkNSyi5z84L3FKgCRJzZoOnAu8NrAND3gBIElSc2YA5xFb/AHWBW9fkqRiRA/7D85tNX9WSZJEu4r/emBVvR9XkiS1rfivB1bW+oklSSpcG4v/euDWOj+0JEkli5rn30t+PKXGDy5JUqmmA98AjoluyAiujG6AJEld09Zh/8E5tLZPL0lSgdo87D+QZYDrAEmSVJEcev7rgVPr2gGSJJUml+K/BF8HLElSJXIY9h/IcTXtA0mSipJT8T+rpn0gSVJRcir+38IH/yRJmrRc7vmvB74LzKxnN0iSVA6LvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhLklQYi78kSYWx+EuSVBiLvyRJhbH4S5JUGIu/JEmFsfhnri+6AZLGZTqwNbAlsAWwGbB5fzYDNgHmABsA8/r/ugGw4aCfMRXYeMjPXQmsHfTPq4AngMeBh/v//on+v18OrBj01wf6cz/wTCWfUm03AzgXOCa6IT24EDgeWB3dkLbxAkBqlznArv1ZAOzQn+36/7o1MCWsdaNbBywDFgP39v91MXAncDtwB+kiQnmz+HeEFwBSjO2BvYF9gT14tuhvF9moBtxLuhi4HbgFuAG4sf/fq/0s/h3iBYBUrxnAC4D9+//6/P7Mi2xUCz1MuhC4CfglcB1wPZ6828Ti3zFeAEjVmUoq7i8GDujPPqQTp8ZvNeki4Nr+XEO6SFgX2ahCWfw7yAsAaeLmAC8CDgUOAw4BNg1tUfc9BvwXcCVwBXAVPldQt+mk4v/a6Ib04GLgWODp6IZI6pbZwEuBM4CrST2M6OlNpWd1/3dxRv93M2vEb08TMQO4gPjvuZdcgKNtkioyFTgQ+N/AD4EniT/JmdHzBHAp8JekWzFtnTGRA4u/pKJsChwHfB5YSvyJzUwuy0nD1yeS1khQb1zkR1IR9gZOB34CrCH+hGbqyTPA5cBpwJ5oJPb8JXXa3sCHSNPOok9iJiZ3AJ8mPcDpA9GJPX9JndMHHAz8A3AX8Scv067cDvw9cBDlsucvqVOeR+rpLyT+pGXyyD2kkYH9KIc9f0mdsB1wCmmeePTJyuSdm0gXkAvoLou/pKzNAk4gTddbS/yJynQra4EfAG+kWwXIYX9J2dobOBN4kPgTlCkjD5Omie5P3uz5S8rOXOA9wK+IPzGZsvML4M+AjcmLPX9JWdmL9HDWKuJPSsYMzirSqEAODw7a85eUhRmklfkuJf5kZEwvuRY4ifTuiLax+Etqva2BDwMPEH8iMmYiuZ80g2BL2sFhf0mtti9pKPUJ4k9CxlSRp4FzgH2IY89fUiv1AUeTpvBFn3yMqSvrSFMJj6LZpYft+UtqnSnAa4DriD/xGNNkbiC9oXAa9bLnL6lVZpBOfrcSf9IxJjJ3kVatrOOBQYu/pNbYGPgAsJT4E44xbcp9pNcUb0Q1HPaX1AobkHo59xN/sjGmzVlBmjkwj4mz5y8p3BxS4bfHb8z4MnAhMJfxsfhLCjWDtBDKvcSfZIzJOcvp/ULA4i8pzHRS4V9C/AnGmC5lOXA66a2Xw7H4SwoxnfRU/+3En1yM6XIWkS6yB08ftPhLCnEscBvxJxZjSspNwGvxaX9NQpOrUalbDgQ+DhwW3RCpYA8CW0Q3ogcXAscDq6Mbomd5AaDx2h74a+BPSCv5SdJoLiaNFD4d3RA9lxcA6tWGwPsZ/UEkSRrM4t9iXgBoLNOAt5FezbtVcFsk5cPi33JeAGg0rwY+BuwZ3RBJWfGefwa8ANBwtgfOAP44uiGSsmPPPxNeAGiw6cCfAR8h3fOXpPGw+GfECwANOAL4JxzulzQxFv/MOI1L2wHnAJdh8Zc0MRb/DDkCUC6H+yVVweKfKS8AynQkabh/9+iGSMqaT/tnzFsAZZkLfB64BIu/pMm5GPhDLP7ZcgSgHK8GPkea4idJk+Gwfwc4AtB9W5Ie8rsIi7+kybP4d4QjAN12HPBZYPPohkjqBIt/h3gB0E3bkgr/MdENkdQZFv+O8RZAt/QBJwG3YPGXVB2Lfwc5AtAd84EvA4fHNkNSxzjVr6McAeiG44BfYPGXVC2n+nWYFwB5mwd8DTgX2CS4LZK6xWH/jvMWQL5eAfwz6YE/SaqSxb8AjgDkZzbwaeB7WPwlVc/iXwhHAPJyIPBvuIyvpHpY/AviCEAepgGnA1dg8ZdUD4t/YRwBaL+dgX8HXhzdEEmd5VS/AjkC0G6vA67F4i+pPk71K5QXAO00i/Sg37dwep+k+jjsXzBvAbTP7sA3gP2iGyKp0yz+hXMEoF3eAPwci7+keln85QhAS8wBzgLeGt0QZWk9cB9wV38WA8uBFUOyBnik/8+sBh7v//vpwIb9fz8TmEtaZXIe6RbUVqQ1J7YBtgd26s/UGj+T6uMDfwK8AGiD55OG/J8X3RC13hpgIXAD8Kv+v94CLKL5ntwM0gyV3YE9SKNW+/X/87SG26LeWfz1G14AxHobqec/O7ohaqVlwFWk9R+uBn4JPBXaorHNBvYFDgYOAQ7FFSvbwuIvtcBM4GzS0K0xA3kYOI90Ybgr3bEAeAfppVUriN/PJeYC0qiNpEDbA/9F/AnBtCM3AGcAL6GMofOpwEGkz3wz8fu/hFj8pRY4nDSsG31CMLH5NfAhfO4DYC/g/wA3Ev+9dDG5FP95pBecvTS6IVIdTgWeIf6EYGJyP/D3pPvjGt4LgU8AS4n/vrqQXIr/XOBnpDavIb33xOfT1AmzgH8h/mRgms9a4FLgRHzQczymAEcCFwHriP8ec8x3Sc8atd3g4j84Xwc2CGyXNGm7AtcTfzIwzWYl8EnSNDlNzm7Ax4FHif9ec0mOPf/h8kvSA6RSdl4FPET8ycA0l2Wke/uboqptBJxCWvMg+ntuc3Lv+Q/NcuBlQW2Uxq0P+CvS8G/0ycA0k9uBt5BHryt3M0grZt5B/PfetnSl5z80PhegLMwEziH+RGCaySJSrzSHHlfXTCc9W7GQ+OOgDcml5z8PuIaJfcav4bM0aqmtSau1RZ8ITP1ZBpxMHr2trpsOvAd4kPjjIipd7fkPl/8Gdmi64dJo9gHuJv5EYOrNauDTpBOZ2mVD0vMXTxB/nDSZXHr+VRT/gdwLHNBs86XhHQOsIv5EYOrNBXRred6umk9a8z76eGnqmCyl5z80jwGva/JDSEOdjg/7dT13Ai9HuXkN6buLPn7qSsnFfyDrSKM+PhyoRs0Evkz8ScDUlzWkVelcjCRfs4GPkr7L6OOpylj8n5uv48OBasgWwE+JPwmY+nI9cCDqigOBm4g/rqqIxX/4XAVs1cgnU7H2ptvDiqVnLWm9/hxOsBqfmcDfkfctu1yK/2Sm+k0md5LO0VLlfp/0vvbok4CpJ0uBo1DX/R6wmPjjbbwp8Wn/ieRh0ncsVeYE4CniTwKmnpyHy/eWZDPgfOKPu16TS88/uvgP5Gngj2r+rCrEKeQ9bGhGzjOkmRwqy3TyuQCw5z+xDMwQkCZkKvBPxB/Ipp48AByBSmPxr17biv/gfBGYVt9HVxdtAHyb+IPX1JNrgB1RaSz+1Wtz8R/I90lvk5TGtBlwJfEHrakn3wBmodJY/KuXQ/EfyM9xmqDGsAe+ZrSrWQd8GFcNK9EM0oN00cdgL8nlgb+oqX6Tye3AbnXsDOVvf9J94eiD1FSfZ4B3ohLZ869eTj3/oVkBHFT9LlHOXgqsJP7gNNXnMeBlqET2/KuXc/EfyCo8J6jfMcCTxB+Upvo8AhyKSmTPv3pdKP4DeQo4rtrdo9y8mTQ8HH0wmurzEA71lcriX70uFf+BrAHeUeVOyk3JD0R9EPgIZe+DrrqfNMR3Q3RDAswHFvRnPrATaWbL4PSRhps3IJ0IHyGdDFeRVlF7DFhGWjJ3Sf9fFwF39f99m80AziWN7LXdhcDxwOrohoxhLnAJ3XxB1nrSw8EfCm6HGtIHfJL4q09TT5YD+1CGPYG3Ap8lvaHyEZrZv5cCHyMtkb0X7bmI9p5/9brY8x8unwamVLTP1FLTgXOIP9hMPXkEOIDu2gU4mdRzfJD4/T2QpcBXgLcA29f14cdg8a9ejlP9JpMv46qBnTWTfE4QZvx5jO498NcH/A7wceA24vdxr/k16dW7+1a/S4Zl8a9eKT3/obkIFwrrnDnAD4g/uEw9WU23pvXsBXwUuJv4fTvZ3AT8FbBrlTtoEIt/9Uot/gP5HjB70ntRrbAx8GPiDypTT9aRhp5zNxs4kXQvP3qf1pXLgdeTXrRVBYt/9Uov/gP5Mal2KGPzgKuJP5hMffm/5G0L0iuJ7yN+XzaV+0hPXW8+if02A6f6Vc3i/9xcQ5o1owxtCfyS+IPI1Jd/oz1PoI/XDsDnKHsRqsdJM3K2HOe+s+dfPYv/8Plv0kW6MrIdcDPxB4+pL1eSx4l1qG2AfyStRBa9D9uSVaQ1OTbpYf9Z/Ktn8R89N5NqijKwAN/o1/UsBbYlL3NIw96PE7//2pqHSAt0jfQUtsW/eqVN9ZtoFpIW1VKL7QzcQ/zBYurLauAl5KMPeBNpJb3ofZdLFgKvGLIfLf7Vs+c/vtxDqjFqoZ1IS5VGHySm3ryXfCzA6aeTyUXAjvjAXx0s/hPLPaQFudQiu2APq4ScRx6mAqficH8VeZR8ZvLY8y8ji/AioDXmY8+/hCwhjyk5OwL/Sfz+Ms3Gnn9ZWUR9i1upR7uR3k4WfTCYerMWOIL2exPwMPH7yzQbe/5lZjFeBITZjdQrjD4ITP35KO02DTiT+P1kmo89/7KzlLR0txq0O3Av8V++qT/X0+7e1bakNQmi95NpPrn0/J3qV2+WkDqkasDOOOxfStYAB9Je+1PWEr7m2eRS/O35N5PFOEWwdjsAdxL/ZZtm8nHa6xXASuL3kWk+Dvub4XIP6aF01WA74Hbiv2TTTO4ENqCd3kUanYjeR6b52PM3o2Uh+a1S2npbA7cQ/+Wa5vJy2uk00iuIo/ePaT4Wf9NLbiXVLFVgc+AG4r9U01zOp51OJ37fmJg47G/Gk+uZ3OuuRXp69Vriv0zTXJ6mnU/Ufoj4fWNiYvE3E8kvgU1H/cY0oo2BnxP/JZpm08Y5/6cRv19MTHIZ9neqXzvzX8CGo3xvGsZsXE61xCwjXfi1ybvwnn+pyaX42/Nvdy5j5Fdca4jppLeARX9ppvn8Ge3yKuAZ4veLaT4O+5sqcyFpxVCNYgrwNeK/LNN87qFdJ9wXAauI3y+m+Vj8TR35CqnGaRh9wNnEf0kmJn9Ce2yLK/yVGof9TZ35p+G+TPkylZJzF+056U4HfkL8PjHNx56/aSIf+e2vtGx/SfyXYuLyFtrjs8TvD9N8cun5+7R/N/L+oV9sqd6CT1mXnCW058T7JuL3h2k+uRR/e/7dyTra1fEJ4VPW5gO0w/bACuL3h2k2DvubqKwGjqJQB+BT1qVnJWlIM9oU4EfE7w/TbCz+JjqPA79DkKgpCbsBF+MKSaX7EvBIdCOAU4Dfj26EGnUh8DrS0tNtNhe4BDgwuiGqxRzSuje7R2y8L2CbWwFXATsHbFvtsY50IXhncDt2Jr24o62vHlb1LgSOJw3BtpnFvxx3AocA9ze50aZHADYi9fwt/rqM+OIP8Dks/iW5GPhDLP5ql51Jt6QaHRVv8gJgOvBN0gpr0heiG0B66v/l0Y1QYxz2V5vtTzpGc5iRMi59wJeJf+DCtCMPEv/w1WzgbuL3hWkmPvBncslXaej2fFMjAB8F3tzQttR+/0J8L+x0YKfgNqgZ9vyVkxOAM6IbUZVTiL+iMu3KvsTahjT9Jno/mPqTyyI/03GFP/PcvIea1T0CcDzwiZq3obzcQnrqPtIHSdNv1G25PPAHaUE0H0bVYJ8CjqtzA3VeALwEOKfmbSg/3wje/g7AO4LboPrlMuw/2DejG6BWmUKqoYfWuYE67AJ8izweulGzzg3e/gfxuOy6XOb5D3VedAPUOrNIx/OudfzwOp40nAdcDexZw89W3m4E9gnc/pakJ/9nB7ZB9cq1+A+4BdgjuhFqnV+TFgp6tMofWvUIwHTSVazFX8P5dvD2T8bi32U53fMfSfTviNrpeaTaOq3KH1r1BcBZwJEV/0x1x/cDtz0b+NPA7ateOd7zH873ohug1noZcHZ0I0byPuKnTZj25hHSCFGUE0dol8k/uSzy04vppN+V6H1q2ptTqEhVIwCvIi32I43kEtJUpyg++d9NFwPHkn/Pf8AzpPdkSCP5BPAHVfygKi4A9iNN7Zpawc9Sd0UO/+8FHBa4fdWjK8P+Q10S3QC12hTgK8ALqvhBk7Et6V3Gjb7BSFn6ceC23xq4bdUj96f9R/PT6Aao9QberLvdZH7IZKYBzgYux3WrNbb7ga2Dtt1Heu3w/KDtq3pdG/Yfqg9YRpq2Ko3mOuBw0tLm4zbREYCBt/tZ/NWLKwO3fRAW/y7p6rD/YOuBK6IboSzsT3q1+oQ68xO9ADidNPwm9SLyAsDjtDu6POw/lLcB1Ks3Ae+fyB+cyAXAUcBHJrIxFSvyAuDVgdtWdUoq/pCGdqVenQm8crx/aLzDBgtIr6zcbLwbUrHWkB5YeSpg2wtI9/+Vt67f8x/OhqRlX32Zmnr1MOm2/O29/oHxHFwbkpaptPhrPG4jpvgDHB20XVWnxOIP8Bjpd0fq1SakGr1xr3+g1wuAPuBfgedPoFEq2w2B235Z4LY1eSU88DeaX0Q3QNnZC/gSPY7u93oB8Nekq3BpvK4P2m4fcHDQtjV5XXixz2TdFN0AZekNpNeej6mXC4BXA387qeaoZFEjALsDWwRtW5NTes9/wK3RDVC2Pkxaon9UY10ALADO6eH/k0ZyS9B2Dw3ariantKf9R+MFgCZqYLngBWP9TyOZDnyV9GCBNBHrgEVB2z4gaLuaOIf9n2shsDa6EcrWJqT39Iz4pszRLgA+ifdQNTn3ETeMu2/QdjUxpT7tP5qngcXRjVDWXgz8w0j/caQLgOOBk2tpjkpyd9B2+4B9grat8bP4j2xJdAOUvXcDfzTcfxjuAmB34Iu1NkeluDtouzsyjrmwCuUDf6PzAkBVOBvYc+i/HHoBMBs4j7RymzRZUff/dwnarsYnlwf+5gE7B23bCwBVYUPgXGDO4H859ALgM3jvVNVZHrTdUZ98VSvk8sDfXOAHxD0PdW/QdtU9+wD/OPhfDL4AeAPw9kabo65bEbTdnYK2q97kMuw/F7iEtL76dkFteDBou+qmtwOvH/iHgQuAjYBPhTRHXRZ1AbBj0HY1tlyG/QcXf4i7AHgkaLvqrk+Rbgn85gLgfcQd4OquqFsAmwdtV6PLtfgDbB/UloeDtqvu2h44FdIFwDTgHaHNUVc9FLRd31jZPrkU/3nAD3lu8QfYNqAt4AWA6nESMG0K8AriDm5125NB23UEoF1yKf4DD/wNt4pk1MyolUHbVbdtD7xsCnB4dEvUWVEnfNcAaI+civ/QYf/BZjfYlsHavt+Ur8OnAIdEt0KdFXXyGnHtazWqK8UfhsyfblDb953ydegUnDKl+kRN85oRtF09K6d5/mMVf3AEQN2zYx/wBHEHt7ptGjFvM1sDTA3YrpJc1vbvtfgDPEPMheVU0vEsVe3JKcD66Faos6KOLY/pOF0s/jD6m1OlHK2bQtxiLeq+6UHbjZp9ULquFn+I+0w+z6K6PDiFuBe2qPui7sU/EbTdkuW4vO94eAGgrlk8BbgquhXqrGlB23UEoFm5PPA30iI/vfACQF1z5RTg8uhWqLNmBW3XEYDm5NTzH2mRn148WmFbxsMZLarLj6eQhsN85aTqELUgjxcAzejSPP+xRL3XwhlaqsNi4NIppCkmXwhujLppXtB2lwZttyQlFX+Ie1h606Dtqtv+P7B2YGrLJ4AlgY1RN0VdACwO2m4pSrjnP1TUBcAWQdtVdy0hvRL4N3NbV9H/ekCpQl4AdE8p9/yHuqeinzNejgCoan8OPAbPXdzim8CXQpqjrto6aLuOZtUjl55/VcP+g91V4c8aD0cAVKUvAv8x8A9DV7d6N/DfjTZHXbZN0HYdAahelxf56cXdFf+8Xm0WtF11z6+A9w7+F0MvAJ4C3ojvoFY1tgva7h1B2+2qXIb9q7znP1TUMbVj0HbVLY+Ravtz1kgZbn3r24B3NNEidd62QdtdQty0ra7Jadi/ynv+gz1E3FTp+UHbVbe8C7hl6L8c6QUX5wJn1doclSDyVdO/DNx2V+TS869r2H/A9TX93F4sCNy2uuEzwFeH+w+jveHqL4Cra2mOSjGfuJXMvACYnJx6/nUWf4i7AJgNbBW0bXXDNcBpI/3H0S4AniHdM/BtgZqoqcT1YLwAmLhcHvir857/YL+o+eePZD7QF7Rt5e8h0mJdI/4ej/WO60XAm4F1FTZKZdk9aLtRJ+3c5TTsX9c9/6GuaGAbw9kjaLvK3zrgjxlj9spYFwAA3wX+poIGqUx7Bm33FmBZ0LZzVdryvr1YRtwMgBcEbVf5+yvSSN6oerkAADiD9GCgNF5RJ7H1wGVB285RLvf8mxr2HxDV+wfYJ3Dbytf5wJm9/I+9XgCsB94O3DDRFqlY+wVu+4eB285JLvf8mxz2H3Bpg9saat/AbStP15OG/tf38j+P9wGT+aSnCjcf559TudaSXgsc8Yre7XBZ4LHkVPybGvYfbD4x7wGYQ3pHS6+dNOkh0u9Hz7esxntw3Q38L9JJXerFVOKGMu8Fbg7adg5yeuAvovj/mriXAO2HxV+9W0uatTeu51UmcoD9APjgBP6cynVw4LYvDNx2m3nPf2zfCdjmgMMCt638nE6Dt6v6gK+T7jMYM1bOI86+o7Sr1FxA3AJN4zEX+Blx++mF9X/EEV0wSruMGZxhV/mr22zSSoHRH960P1HrqA+4kfh90JZ8F5g5ud3ZiOjif3v9H3FEfcADI7TLmMG5lvS8yIRM5h7Tk6SHh3z1qsayLbFrmv974LbbJJd7/pHD/gMij5k9gS0Ct6883AscwyQesJ7sQyZLgVcCj07y56j7jgzc9sDtqpLlcs8/YqrfUOuBfw3c/uGB21YeVgGvYpKjq1U8ZXoTzgzQ2F4WuO07gJ8Gbj9aLj3/qKf9h7ocWBi4/aMCt632W0equZFvqfwtpxJ/P8S0Nw+RpgRGef0I7ep6vOc//pxQ82cdzQxg5QjtMmY9cAotdTbxO8e0NwcRZxppHYvofdBkcnnafx5pgbHo/bWetPb/rHo/7qiOGKFdxqwHvkiFql5o4t3ELp2pdvuDwG2vAT4XuP2mec9/Yv4ReCpw+68M3Lba7RLgXdGNGMvGpHcGRF8pmfblVmJtAjxG/H6oOw77TyyPA5vV+onHdgvx+8G0LzeRfl8qVcdSkytJPb0HavjZytvuwF6B238Y+ELg9puQy9r+bZjqN9QXgBWB298P2CNw+2qnFaTpflnNtjuMNJQWfeVk2pXoZaS3JE2hid4PdSSXe/5t6/mvJ61rsl2dH7oH/4/4/WDalSeBQ8nUMaR7r9E70bQnNxGviydah/0nl4/V+aF7tJD4/WDak7XAcWTuT4nfkaZdiVxjHdLw8wri90NVyaX4t+lp/8FZSfzKewcQvx9Mu1L7dL8m5mVfS3pvgG+30oAnSE9+R3mKNC3wpYFtqMqFwBvI42n/S4AXRzdkGH9LalukDwC/E9wGtceZpJHKTugDziH+isq0I0tJBTjSLPIfcvWe/+RzB7Hz/iGN3jxI/L4w7chXSDWzU6YD3yN+55p25FjivZz4/TDROOxfTV5b30fv2QnE7wfTjvyQPC7qJ2QOvkLYpEQPuQ44l/h9Md7kUvzb3PMf2I9t8J/E7wsTn2uADem4zUkLwkTvbBObdaR1AaJtDTxC/P7oNRb/arIS2KG2T9+73Ui/C9H7w8RmIQEPotaxENBYlgNH40JBpesD3hndCNJLin4d3Yge5fJWvzYu8jPUB4HF0Y0A3ksH7/dqXB4kvdr3weiGNGl/ursgi+ktK0nFIsoM4Pxh2tXG2POvLpcT0/kZalM8B5aelcCLKNQRpN5M9Jdg4nIaMSz+1cuh+D9EO4b+Af6a+P1h4rIaeAWFOwHvgZWcJTT/1KvFv3ptf9p/Pek8c0xdO2CcZpKmw0bvExN3LL4ZAWkRjOgvxMTlbTRnBmn+fPRn7iXO8682bVjud8BJxO8PE5f3oec4g/gvxcTkbpopW4QjEgAAD9xJREFUdPb8q5dL8f8R8YtPDZgB3En8PjEx+TAa1ieI/3JMTN5OvSz+1cth2H89sIj0Fsi2OJn4fWJichYa0RTg34j/kkzzuYu0WmQdHPavXi49/5XAC2raBxMxizT9MHq/mOZzDu2YfdJqU4HziP+yTPN5D9Wz51+9XIr/atJyz21yKvH7xTSfC2jPLajWmwF8n/gvzTSbFaS50VWx+Fcvl2H/dcBb6tkFE7YJvvSnxPyQ+BdOZWdDfG9AiTmTajjsX71cev7raedT1p8ifr+YZnMFsAGakHnAdcR/iaa5PAnMZ3Is/tXLqfh/sKZ9MBl7km5JRO8b01x+QRr10SR4EVBeLmDipuOwf9VyKv5VjSBV7WLi941pLr8CNkOV2AK4kfgv1TSX1zB+Fv/q5VL815EesGuj1xC/f0xzuZGAN/t13Vakt7ZFf7mmmdzD+O6dWfyrl8sDf6uBt9a0DyZrI9I6BNH7yDST24BtUC12wBW0SspH6Y33/KuXS89/FelVqm11FvH7yDSTu4GdUK12JC0aE/1lm/qzFjiU0dnzr14uPf9FwL417YMqHASsIX4/mWaOxQWoEbvialql5CZGLpr2/KuXS8//x8DWNe2DKswkHbvR+8nUn0XALqhRu+K9tVLyd/w2i3/1cin+n6e+ZaOr8kni95OpPxb/QDvhMwElZC1wBM9y2L96OQz7PwgcU9cOqNDLSbMSoveXqTf3YPEPtxNeBJSQJaR5tRb/6uXQ8/8hsF1dO6BCmwP3Eb+/TL25B9gZtcIC0hOY0QeFqTfn47B/1dre818JvBvoq2sHVKgP+Dbx+8zUm7uY/GqlqtiOwB3EHxzG2POvbj/uWNunr95fEr/PTL25G5/2by0vAkx0cin+be753w68tr6PXosjgGeI33emvtyNxb/1dgIWEn+wmPLisP/kspLUi87hAmqwHYAHiN9/pr7c2v89KwNbAdcTf9CYcpJLz7+Nw/5Pkab2tXle/0hmAT8nfh+a+nIDeR6bRduE9p3oTDeTS/FvW8//MeBT5Hty7QO+Qvx+NPXlOtLMDmVoLnAl8QeR6W5yKf5t6vnfD3yI/F+Xeibx+9LUl58Dm6KsbQBcSvzBZLqXXIp/G3r+64AfASeQxz4by9uJP/5Mfbmc9CZHdcBM8pk/bvKIxb+3LAQ+Qlq6uyuOxif+u5zvkJ7tUIfMAM4j/uAy+cfiP3puIr3Kef/6P2LjDiU9uxB9DJp6ciF5/G5rAqYBXyb+IDP5xql+v52lpIvrk8hr4Z7xOog0VTH6GDT15EvAVNRpfaTeSfTBZvKLPX94iHR/9DPAm+nW0P5o9gFWEH8MmnryafJYbrpSxX3gQU4hvbKz5H2g3l0MHAs8Hd2QHuwMHAJsS3qBzg6kqXYbA7OBDUkvVZoLTAFWAWv68xCp0K0AlpNed3pXf+4A7m3wc7TFC4BLgC2jG6LKrQdOBz4W3RA170R8mMeMnVx6/qreAaQLoehj0FSfNcCfoKL9AfAE8QejaWcs/uX6XeBR4o9BU32eAt6ABBwOPEL8QWnaFYt/uY7GjkFX8wjpnC/9xotIK5RFH5ymHbH4l+ttwGrij0FTfZYBL0Qaxm6kV5FGH6QmNrlM9VO1+nB53y7nNmAXpFFsBlxB/MFqYmLPv0wzga8Sf/yZevIznMWhHs0CziX+oDXNxuJfpu2Bq4k//kw9uQCYgzQOU4GziD94TTOx+JfpcNJ94ejjz9STL5BWgJUm5BRgLfEHsqkvFv/y9JF+t33Yr5tZR3rltDRprweeJP6gNtXH4l+eLYBvE3/smXryFPBGpAodAjxI/MFtqovFvzxHkpYzjj72TD15GPg9pBrsDdxJ/EFuJh+n+pVlJundH+uIP/ZMPbmTdI6WarMZ8J/EH+xm4rHnX5ZDgJuIP+5MffkJ6daOVLsZwD8Tf9Cb8cfiX445pIV91hB/3Jn68jXS1G2pUafgySWnWPzL8RrSq4yjjzlTX9YCpyEFOgpfJJRDLP5l2B24iPjjzdSbVcAxSC3wfOAu4n8pzPCx+HffPNJw/9PEH2+m3iwmvbxNao3NgMuJ/+Uwz43Fv9tmA6fiFN1ScgWu6a+Wmgn8C/G/JCbF4t9d04GTgCXEH2emmXyddMEntdrpuHxwdJzn300zSYX/buKPMdNM1gAfQMrIK4EVxP/ylBh7/t2zMWnWjT3+srIceAVShnYEfk78L1FJsfh3y27AZ4DHiD+2TLP5BTAfKWOzgC8R/8tUQiz+3TATOA64FJfuLTVfIS3kJHXCSThFqc7kUvx9N/nI9gc+hbfOSs5q4GSkDjoAuIf4X7KuJZfiPxf4GemlJZ8GDottTivsTXpv+63EH0cmNg8Av4/UYVsAlxH/y9aV5FL85wHX8NvtvwX4e9KJb3pY65ozAziC9JlvIf74Me3IFcA2SAWYRlq1LPqXLvfkXvyH5lHgm8C7gOcBfRGNrVgfsCfwTtLUzFXEHzemXfkMZVz8Ss/xRny6eaLpWvEfLg8A/wH8OfASYKOG2z4Rc0iv3z0NuBBX6DMj5zHgj1GYLvQwcrcn8A1g3+iGZORi4FjSQ5VtNo/0JPsBFf28dcBtpOlRN/b//a3AQprfF7OABaTjd5/+7AvsAkxtuC3Kzw3A8aTbQAriBUA7zAI+Crw3uiEZKLX4j2Yt6QUpS/pzb/8/Lye9qfLh/r+uBB7v/zNPAU/2//2GpCHYqaQFd6aT3m0xOFsAO5DmZS/A+7WauM+T3t/w5Fj/o1SSY4GHiB+aa2tyGfYfeNo/en8Z06asBN6EpBHtBFxF/C9r22LxNybfXAfsiqQxTSPNjfaFQikWf2PyzDrSmhc5/P5KrXIksJT4X+LIWPyNyTOPkJZ0ljRBWwGXEP/LHJFciv9kpvoZ08VcSXoZmqRJmkq6JfAM8b/YTeUC0qpxbWfP35hn8wxpkTMX9pEqdiBlLJ+aS8/f4m/Ms7mZZqa9SsWaTbrC7uoDghZ/Y/LKOtLc/g2Q1IgjSYu9RP/yVxmLvzF5ZRnwaiQ1bi7pyjv6JFBFLP7G5JXzSKtESgr0BtKyr9EnhInG4m9MPnkUOAlJrbEV8G3iTw7jTS7F36l+xsCPcHqf1Ep9pBcKRZ8keo1T/YzJI48CpwBTkNRKM4DziT9Z9JJcev4Wf1N6vou9fqnVLP7Vs/ibkvMQ3uuXWs/iXz2Lvyk55wJbIKnVLP7Vs/ibUnMf8DoktZ7Fv3oWf1Ni1gHnAJsiqfUs/tVzqp8pMTcChyMpCxb/6tnzN6XlcdJbRnOYiisJi38dLP6mtFyEU/ukrFj8q2fxNyVlIXAUkrJi8a+exd+UkidIw/05/F5KGsTiXz2LvyklFwHzkZQdi3/1fNrflJCbcLhfypbFv3r2/E3Xs5z04p5pSMqSxb96Fn/T5TwBnEk6ziVlyuJfPYu/6WrWkdbun4+krFn8q2fxN13NVcDBSMqexb96PvBnupibgdcgqRMs/tWz52+6lruBk/ABP6kzLP7Vs/ibLmUR6cn+HH73JPXI4l89i7/pSh4ATgdmIalTLP7Vs/ibLuRBUuGfg6TOsfhXz+Jvcs8K0pr9GyOpkyz+1fNpf5NzlgIfwMIvdZrFv3r2/E2uuZP0cN9sJHWaxb96Fn+TY64HTsTpfFIRLP7Vc9jf5JR1wPeBlwN9SCqCxb969vxNLnkKOAd4PpKKYvGvnj1/k0OWAn8DbIGk4lj8q2fP37Q915KW63XxHqlQFv96nAQ8TPw+M2ZwHgXOAvZGUtEs/vWaBfwRcBmwlvh9aMrNNcA7gQ2RVDyLf7O2Jy2Zeifx+9OUkYeBzwMvRJL6WfzjTAGOAs4lPXUdvX9Nt7IG+B5wHN36vZFUAYt/e2xOWl3tZ6S519H72+Sba4BTgW2QpGFY/NtrB9LFwBV4MWB6y93AmcAeSNIoLP75WEB64cq1xH8Xpl25Dfg74AAkqQcW/3zthCMDpecmUk//MCRpHCz+3bEzcDJpPz1O/Pdl6slq4EfA+4DdkaQJsPh31yzgSFLP0FsF+edB0syQE0lLSEvShFn8yzIwOvAdHB3IIY8DPyA96/Ei0vRQScPwlZTjMwP4BvDa6Ib04GLgWODp6IZ0yCzgIOAlwCHAocDGoS3SauA60tD+ZcBVeMxLPfECoHcWfw01FdiTdCFwWH8WhLao+1aR1ne4kvQA55XAk6EtkjLlBUBvLP7q1XzSCMHBpKVi9wE2iGxQxp4EfkV6FuNa0qI8N5OG+iVNkhcAY7P4azKmALsALxiUfUnTEPWs5cANwI2kon9d/9+viWyU1GVeAIzO4q+6bMKzFwN7km4d7EwaQZgR16xarQOWAAuB20m9+Rv7c39gu6QieQEwMou/IkwhveFw4IJgIAtIFwebA9OjGjeGNcAyYBFwb38Wkd7UeHt/PEallvACYHgWf7XZXGBL0sXA4Az+d7OA2f1/ndL/ZyA9jzADmAZsNOhnPjxkG48AT/TnUdLDd0/0//sVpCH75aR59gO5H1hb2aeUpIY5z1+SpMJY/CVJKozFX5Kkwlj8JUkqjMVfkqTCWPwlSSqMxV+SpMJY/CVJKozFX5KkwkzH4i9JUlEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFcbiL0lSYSz+kiQVxuIvSVJhLP6SJBXG4i9JUmEs/pIkFWYq8C3iC3svuQCYUc9ukCSpLGcTX9gt/pIkNeiNxBd2i78kSQ2aBSwmvriPFe/5S5JUodOIL+4Wf0mSGjQNeID4Au+wvyRJDfo94gu8PX9Jkhr2MeKLvMVfkqSG/ZT4Qu+wvyRJDbud+GJvz1+SpIY9RnzBt/hLktSwVcQXfYu/JEkNW0h84bf4S5LUsJ8QX/x94E+SpAZNAa4ObsPFwB8Cq4PbIUlSUX4Xh/0lSSrONOB+HPaXJKk478eevyRJxZkFLMLiL0lScY7HYX9Jkor0WSz+kiQVZyrwTaov/v+BxV+SpFabSrUjAWf1/0xJkpSB44HFTLzwLwKOa7zVkiRp0mYBf8H41gm4v//PzAporyRJ6kFfj//fVOAQ4GjgYGBrYLv+/3YvsIy0pPB3+v+6ttpmSpKkKv0Pnv98KlOZz0cAAAAASUVORK5CYII="/>
          </defs>
        </svg>
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input v-model="dateOfBirth" type="date" name="dob">
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
      <div class="form-group">
        <p>Already have an account? <nuxt-link to="/signin">Sign In</nuxt-link></p>
      </div>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "~/plugins/fireinit";

export default {
  data() {
    return {
      passwordType: "password",
      isShowPassword: false,
      fullName:"",
      userName:"",
      email:"",
      password:"",
      dateOfBirth:"",
    }
  },
  methods: {
    toggleShowPassword() {
      if(this.passwordType === "password") {
        this.passwordType = "text";
        this.isShowPassword = true;
      } else {
        this.passwordType = "password";
        this.isShowPassword = false;
      }
    },
    toastify(msg, actionText) {
      this.$toasted.show(msg, {
        theme: "toasted-primary",
        position: "bottom-center",
        duration: 5000,
        action: {
          text: actionText,
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        }
      });
    },
    createNewUserWithEmailAndPassword() {
      if(!this.fullName || !this.userName || !this.dateOfBirth) {
        this.toastify("Please fill all the fields", "Try Again");
        return;
      }
      if(!this.email) {
        this.toastify("Please enter a valid email", "Try Again");
        return;
      }
      if(!this.password) {
        this.toastify("Please fill out the password field", "Try Again");
        return;
      }
      if(this.password.length <= 6) {
        this.toastify("password must be at least 7 characters", "Try Again");
        return;
      }

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // console.log(userCredential);
          this.toastify("Account Successfully Created", "Ok");
          sendEmailVerification(auth.currentUser)
            .then(() => {
              this.$router.push({ path: "/check-email-inbox" });
            });
        })
        .catch((error) => {
          this.toastify(error.message, "Try Again");
          // console.log(error.message);
        });
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/styles/styles.scss';

.container-xl {
    margin: auto;
    display: grid;
    place-items: center;

    .card {
      background: $secondary-background-color;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      border-radius: 10px;
      padding: 2rem 3.2rem;
      @include responsive(phone) {
        padding: 2.5rem;
      }

      p {
        color: $black-color;
        margin-bottom: -0.5rem;
        font-size: 16px;
        transition: all 0.3s ease-in-out;
        @include responsive(phone) {
          font-size: 12px;
        }

        span {
          color: $green-color;
          letter-spacing: 2px;
          font-weight: 600;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: $black-color;
          }
        }
      }

      h1 {
        color: $black-color;
        font-size: 30px;
        margin-bottom: 0.5rem;
        padding-right: 2rem;
        @include responsive(phone) {
          font-size: 1.2rem;
        }
      }

      .form-group {
        display: flex;
        flex-direction: column;
        position: relative;
        
        label {
          color: $black-color;
          margin-bottom: 0.3rem;
          @include responsive(phone) {
            margin-bottom: 0.2rem;
            font-size: 12px;
          }
        }

        input {
          padding: 0.8rem 1rem;
          border-radius: 5px;
          border: 1px solid #ededed;
          margin-bottom: 0.5rem;
          outline: none;
          @include responsive(phone) {
            padding: 0.6rem 1rem;
          }

          &:focus {
            border: 1px solid #023047;
          }
        }

        button {
          padding: 0.7rem 0;
          border-radius: 5px;
          margin-top: 0.5rem;
          text-align: center;
          letter-spacing: 2px;
          background-color: $black-color;
          color: #fff;
          font-weight: 400;
          font-size: 16px;
          border: 1px solid #ededed;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          @include responsive(phone) {
            padding: 0.6rem 0;
          }

          &:hover {
            background: $green-color;
            color: $black-color;
          }
        }

        p {
            text-align: center;
            margin-top: 1rem;
            font-size: 14px;

            a {
                color: $green-color;
                transition: all 0.3s ease-in-out;
                &:hover {
                color: $black-color;
                }
            }
        }

        .password-icon {
          position: absolute;
          top: 64%;  
          right: 0%; 
          transform: translate(-50%, -50%);
          cursor: pointer;
        }
      }
    }
}
</style>
