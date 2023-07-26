const input = `b[0]_0=a[0]_0a[1]_0
b[0]_1=a[0]_0a[1]_1 + a[0]_1a[1]_0
b[0]_2=a[0]_0a[1]_2 + a[0]_1a[1]_1 + a[0]_2a[1]_0
b[0]_3=a[0]_0a[1]_3 + a[0]_1a[1]_2 + a[0]_2a[1]_1 + a[0]_3a[1]_0
b[0]_4=a[0]_0a[1]_4 + a[0]_1a[1]_3 + a[0]_2a[1]_2 + a[0]_3a[1]_1 + a[0]_4a[1]_0
b[0]_5=a[0]_0a[1]_5 + a[0]_1a[1]_4 + a[0]_2a[1]_3 + a[0]_3a[1]_2 + a[0]_4a[1]_1 + a[0]_5a[1]_0
b[0]_6=a[0]_0a[1]_6 + a[0]_1a[1]_5 + a[0]_2a[1]_4 + a[0]_3a[1]_3 + a[0]_4a[1]_2 + a[0]_5a[1]_1 + a[0]_6a[1]_0
b[0]_7=a[0]_0a[1]_7 + a[0]_1a[1]_6 + a[0]_2a[1]_5 + a[0]_3a[1]_4 + a[0]_4a[1]_3 + a[0]_5a[1]_2 + a[0]_6a[1]_1 + a[0]_7a[1]_0
b[0]_8=a[0]_0a[1]_8 + a[0]_1a[1]_7 + a[0]_2a[1]_6 + a[0]_3a[1]_5 + a[0]_4a[1]_4 + a[0]_5a[1]_3 + a[0]_6a[1]_2 + a[0]_7a[1]_1 + a[0]_8a[1]_0
b[0]_9=a[0]_0a[1]_9 + a[0]_1a[1]_8 + a[0]_2a[1]_7 + a[0]_3a[1]_6 + a[0]_4a[1]_5 + a[0]_5a[1]_4 + a[0]_6a[1]_3 + a[0]_7a[1]_2 + a[0]_8a[1]_1 + a[0]_9a[1]_0
b[0]_10=a[0]_0a[1]_10 + a[0]_1a[1]_9 + a[0]_2a[1]_8 + a[0]_3a[1]_7 + a[0]_4a[1]_6 + a[0]_5a[1]_5 + a[0]_6a[1]_4 + a[0]_7a[1]_3 + a[0]_8a[1]_2 + a[0]_9a[1]_1 + a[0]_10a[1]_0
b[0]_11=a[0]_0a[1]_11 + a[0]_1a[1]_10 + a[0]_2a[1]_9 + a[0]_3a[1]_8 + a[0]_4a[1]_7 + a[0]_5a[1]_6 + a[0]_6a[1]_5 + a[0]_7a[1]_4 + a[0]_8a[1]_3 + a[0]_9a[1]_2 + a[0]_10a[1]_1 + a[0]_11a[1]_0
b[0]_12=a[0]_0a[1]_12 + a[0]_1a[1]_11 + a[0]_2a[1]_10 + a[0]_3a[1]_9 + a[0]_4a[1]_8 + a[0]_5a[1]_7 + a[0]_6a[1]_6 + a[0]_7a[1]_5 + a[0]_8a[1]_4 + a[0]_9a[1]_3 + a[0]_10a[1]_2 + a[0]_11a[1]_1 + a[0]_12a[1]_0
b[0]_13=a[0]_0a[1]_13 + a[0]_1a[1]_12 + a[0]_2a[1]_11 + a[0]_3a[1]_10 + a[0]_4a[1]_9 + a[0]_5a[1]_8 + a[0]_6a[1]_7 + a[0]_7a[1]_6 + a[0]_8a[1]_5 + a[0]_9a[1]_4 + a[0]_10a[1]_3 + a[0]_11a[1]_2 + a[0]_12a[1]_1 + a[0]_13a[1]_0
b[0]_14=a[0]_0a[1]_14 + a[0]_1a[1]_13 + a[0]_2a[1]_12 + a[0]_3a[1]_11 + a[0]_4a[1]_10 + a[0]_5a[1]_9 + a[0]_6a[1]_8 + a[0]_7a[1]_7 + a[0]_8a[1]_6 + a[0]_9a[1]_5 + a[0]_10a[1]_4 + a[0]_11a[1]_3 + a[0]_12a[1]_2 + a[0]_13a[1]_1 + a[0]_14a[1]_0
b[0]_15=a[0]_0a[1]_15 + a[0]_1a[1]_14 + a[0]_2a[1]_13 + a[0]_3a[1]_12 + a[0]_4a[1]_11 + a[0]_5a[1]_10 + a[0]_6a[1]_9 + a[0]_7a[1]_8 + a[0]_8a[1]_7 + a[0]_9a[1]_6 + a[0]_10a[1]_5 + a[0]_11a[1]_4 + a[0]_12a[1]_3 + a[0]_13a[1]_2 + a[0]_14a[1]_1 + a[0]_15a[1]_0
b[0]_16=a[0]_0a[1]_16 + a[0]_1a[1]_15 + a[0]_2a[1]_14 + a[0]_3a[1]_13 + a[0]_4a[1]_12 + a[0]_5a[1]_11 + a[0]_6a[1]_10 + a[0]_7a[1]_9 + a[0]_8a[1]_8 + a[0]_9a[1]_7 + a[0]_10a[1]_6 + a[0]_11a[1]_5 + a[0]_12a[1]_4 + a[0]_13a[1]_3 + a[0]_14a[1]_2 + a[0]_15a[1]_1 + a[0]_16a[1]_0
b[0]_17=a[0]_0a[1]_17 + a[0]_1a[1]_16 + a[0]_2a[1]_15 + a[0]_3a[1]_14 + a[0]_4a[1]_13 + a[0]_5a[1]_12 + a[0]_6a[1]_11 + a[0]_7a[1]_10 + a[0]_8a[1]_9 + a[0]_9a[1]_8 + a[0]_10a[1]_7 + a[0]_11a[1]_6 + a[0]_12a[1]_5 + a[0]_13a[1]_4 + a[0]_14a[1]_3 + a[0]_15a[1]_2 + a[0]_16a[1]_1 + a[0]_17a[1]_0
b[0]_18=a[0]_0a[1]_18 + a[0]_1a[1]_17 + a[0]_2a[1]_16 + a[0]_3a[1]_15 + a[0]_4a[1]_14 + a[0]_5a[1]_13 + a[0]_6a[1]_12 + a[0]_7a[1]_11 + a[0]_8a[1]_10 + a[0]_9a[1]_9 + a[0]_10a[1]_8 + a[0]_11a[1]_7 + a[0]_12a[1]_6 + a[0]_13a[1]_5 + a[0]_14a[1]_4 + a[0]_15a[1]_3 + a[0]_16a[1]_2 + a[0]_17a[1]_1 + a[0]_18a[1]_0
b[0]_19=a[0]_0a[1]_19 + a[0]_1a[1]_18 + a[0]_2a[1]_17 + a[0]_3a[1]_16 + a[0]_4a[1]_15 + a[0]_5a[1]_14 + a[0]_6a[1]_13 + a[0]_7a[1]_12 + a[0]_8a[1]_11 + a[0]_9a[1]_10 + a[0]_10a[1]_9 + a[0]_11a[1]_8 + a[0]_12a[1]_7 + a[0]_13a[1]_6 + a[0]_14a[1]_5 + a[0]_15a[1]_4 + a[0]_16a[1]_3 + a[0]_17a[1]_2 + a[0]_18a[1]_1 + a[0]_19a[1]_0
b[0]_20=a[0]_0a[1]_20 + a[0]_1a[1]_19 + a[0]_2a[1]_18 + a[0]_3a[1]_17 + a[0]_4a[1]_16 + a[0]_5a[1]_15 + a[0]_6a[1]_14 + a[0]_7a[1]_13 + a[0]_8a[1]_12 + a[0]_9a[1]_11 + a[0]_10a[1]_10 + a[0]_11a[1]_9 + a[0]_12a[1]_8 + a[0]_13a[1]_7 + a[0]_14a[1]_6 + a[0]_15a[1]_5 + a[0]_16a[1]_4 + a[0]_17a[1]_3 + a[0]_18a[1]_2 + a[0]_19a[1]_1 + a[0]_20a[1]_0
b[0]_21=a[0]_0a[1]_21 + a[0]_1a[1]_20 + a[0]_2a[1]_19 + a[0]_3a[1]_18 + a[0]_4a[1]_17 + a[0]_5a[1]_16 + a[0]_6a[1]_15 + a[0]_7a[1]_14 + a[0]_8a[1]_13 + a[0]_9a[1]_12 + a[0]_10a[1]_11 + a[0]_11a[1]_10 + a[0]_12a[1]_9 + a[0]_13a[1]_8 + a[0]_14a[1]_7 + a[0]_15a[1]_6 + a[0]_16a[1]_5 + a[0]_17a[1]_4 + a[0]_18a[1]_3 + a[0]_19a[1]_2 + a[0]_20a[1]_1 + a[0]_21a[1]_0
b[0]_22=a[0]_0a[1]_22 + a[0]_1a[1]_21 + a[0]_2a[1]_20 + a[0]_3a[1]_19 + a[0]_4a[1]_18 + a[0]_5a[1]_17 + a[0]_6a[1]_16 + a[0]_7a[1]_15 + a[0]_8a[1]_14 + a[0]_9a[1]_13 + a[0]_10a[1]_12 + a[0]_11a[1]_11 + a[0]_12a[1]_10 + a[0]_13a[1]_9 + a[0]_14a[1]_8 + a[0]_15a[1]_7 + a[0]_16a[1]_6 + a[0]_17a[1]_5 + a[0]_18a[1]_4 + a[0]_19a[1]_3 + a[0]_20a[1]_2 + a[0]_21a[1]_1 + a[0]_22a[1]_0
b[0]_23=a[0]_0a[1]_23 + a[0]_1a[1]_22 + a[0]_2a[1]_21 + a[0]_3a[1]_20 + a[0]_4a[1]_19 + a[0]_5a[1]_18 + a[0]_6a[1]_17 + a[0]_7a[1]_16 + a[0]_8a[1]_15 + a[0]_9a[1]_14 + a[0]_10a[1]_13 + a[0]_11a[1]_12 + a[0]_12a[1]_11 + a[0]_13a[1]_10 + a[0]_14a[1]_9 + a[0]_15a[1]_8 + a[0]_16a[1]_7 + a[0]_17a[1]_6 + a[0]_18a[1]_5 + a[0]_19a[1]_4 + a[0]_20a[1]_3 + a[0]_21a[1]_2 + a[0]_22a[1]_1 + a[0]_23a[1]_0
b[0]_24=a[0]_0a[1]_24 + a[0]_1a[1]_23 + a[0]_2a[1]_22 + a[0]_3a[1]_21 + a[0]_4a[1]_20 + a[0]_5a[1]_19 + a[0]_6a[1]_18 + a[0]_7a[1]_17 + a[0]_8a[1]_16 + a[0]_9a[1]_15 + a[0]_10a[1]_14 + a[0]_11a[1]_13 + a[0]_12a[1]_12 + a[0]_13a[1]_11 + a[0]_14a[1]_10 + a[0]_15a[1]_9 + a[0]_16a[1]_8 + a[0]_17a[1]_7 + a[0]_18a[1]_6 + a[0]_19a[1]_5 + a[0]_20a[1]_4 + a[0]_21a[1]_3 + a[0]_22a[1]_2 + a[0]_23a[1]_1 + a[0]_24a[1]_0
b[0]_25=a[0]_0a[1]_25 + a[0]_1a[1]_24 + a[0]_2a[1]_23 + a[0]_3a[1]_22 + a[0]_4a[1]_21 + a[0]_5a[1]_20 + a[0]_6a[1]_19 + a[0]_7a[1]_18 + a[0]_8a[1]_17 + a[0]_9a[1]_16 + a[0]_10a[1]_15 + a[0]_11a[1]_14 + a[0]_12a[1]_13 + a[0]_13a[1]_12 + a[0]_14a[1]_11 + a[0]_15a[1]_10 + a[0]_16a[1]_9 + a[0]_17a[1]_8 + a[0]_18a[1]_7 + a[0]_19a[1]_6 + a[0]_20a[1]_5 + a[0]_21a[1]_4 + a[0]_22a[1]_3 + a[0]_23a[1]_2 + a[0]_24a[1]_1 + a[0]_25a[1]_0
b[0]_26=a[0]_0a[1]_26 + a[0]_1a[1]_25 + a[0]_2a[1]_24 + a[0]_3a[1]_23 + a[0]_4a[1]_22 + a[0]_5a[1]_21 + a[0]_6a[1]_20 + a[0]_7a[1]_19 + a[0]_8a[1]_18 + a[0]_9a[1]_17 + a[0]_10a[1]_16 + a[0]_11a[1]_15 + a[0]_12a[1]_14 + a[0]_13a[1]_13 + a[0]_14a[1]_12 + a[0]_15a[1]_11 + a[0]_16a[1]_10 + a[0]_17a[1]_9 + a[0]_18a[1]_8 + a[0]_19a[1]_7 + a[0]_20a[1]_6 + a[0]_21a[1]_5 + a[0]_22a[1]_4 + a[0]_23a[1]_3 + a[0]_24a[1]_2 + a[0]_25a[1]_1 + a[0]_26a[1]_0
b[0]_27=a[0]_0a[1]_27 + a[0]_1a[1]_26 + a[0]_2a[1]_25 + a[0]_3a[1]_24 + a[0]_4a[1]_23 + a[0]_5a[1]_22 + a[0]_6a[1]_21 + a[0]_7a[1]_20 + a[0]_8a[1]_19 + a[0]_9a[1]_18 + a[0]_10a[1]_17 + a[0]_11a[1]_16 + a[0]_12a[1]_15 + a[0]_13a[1]_14 + a[0]_14a[1]_13 + a[0]_15a[1]_12 + a[0]_16a[1]_11 + a[0]_17a[1]_10 + a[0]_18a[1]_9 + a[0]_19a[1]_8 + a[0]_20a[1]_7 + a[0]_21a[1]_6 + a[0]_22a[1]_5 + a[0]_23a[1]_4 + a[0]_24a[1]_3 + a[0]_25a[1]_2 + a[0]_26a[1]_1 + a[0]_27a[1]_0
b[0]_28=a[0]_0a[1]_28 + a[0]_1a[1]_27 + a[0]_2a[1]_26 + a[0]_3a[1]_25 + a[0]_4a[1]_24 + a[0]_5a[1]_23 + a[0]_6a[1]_22 + a[0]_7a[1]_21 + a[0]_8a[1]_20 + a[0]_9a[1]_19 + a[0]_10a[1]_18 + a[0]_11a[1]_17 + a[0]_12a[1]_16 + a[0]_13a[1]_15 + a[0]_14a[1]_14 + a[0]_15a[1]_13 + a[0]_16a[1]_12 + a[0]_17a[1]_11 + a[0]_18a[1]_10 + a[0]_19a[1]_9 + a[0]_20a[1]_8 + a[0]_21a[1]_7 + a[0]_22a[1]_6 + a[0]_23a[1]_5 + a[0]_24a[1]_4 + a[0]_25a[1]_3 + a[0]_26a[1]_2 + a[0]_27a[1]_1 + a[0]_28a[1]_0
b[0]_29=a[0]_0a[1]_29 + a[0]_1a[1]_28 + a[0]_2a[1]_27 + a[0]_3a[1]_26 + a[0]_4a[1]_25 + a[0]_5a[1]_24 + a[0]_6a[1]_23 + a[0]_7a[1]_22 + a[0]_8a[1]_21 + a[0]_9a[1]_20 + a[0]_10a[1]_19 + a[0]_11a[1]_18 + a[0]_12a[1]_17 + a[0]_13a[1]_16 + a[0]_14a[1]_15 + a[0]_15a[1]_14 + a[0]_16a[1]_13 + a[0]_17a[1]_12 + a[0]_18a[1]_11 + a[0]_19a[1]_10 + a[0]_20a[1]_9 + a[0]_21a[1]_8 + a[0]_22a[1]_7 + a[0]_23a[1]_6 + a[0]_24a[1]_5 + a[0]_25a[1]_4 + a[0]_26a[1]_3 + a[0]_27a[1]_2 + a[0]_28a[1]_1 + a[0]_29a[1]_0
b[0]_30=a[0]_0a[1]_30 + a[0]_1a[1]_29 + a[0]_2a[1]_28 + a[0]_3a[1]_27 + a[0]_4a[1]_26 + a[0]_5a[1]_25 + a[0]_6a[1]_24 + a[0]_7a[1]_23 + a[0]_8a[1]_22 + a[0]_9a[1]_21 + a[0]_10a[1]_20 + a[0]_11a[1]_19 + a[0]_12a[1]_18 + a[0]_13a[1]_17 + a[0]_14a[1]_16 + a[0]_15a[1]_15 + a[0]_16a[1]_14 + a[0]_17a[1]_13 + a[0]_18a[1]_12 + a[0]_19a[1]_11 + a[0]_20a[1]_10 + a[0]_21a[1]_9 + a[0]_22a[1]_8 + a[0]_23a[1]_7 + a[0]_24a[1]_6 + a[0]_25a[1]_5 + a[0]_26a[1]_4 + a[0]_27a[1]_3 + a[0]_28a[1]_2 + a[0]_29a[1]_1 + a[0]_30a[1]_0
b[0]_31=a[0]_0a[1]_31 + a[0]_1a[1]_30 + a[0]_2a[1]_29 + a[0]_3a[1]_28 + a[0]_4a[1]_27 + a[0]_5a[1]_26 + a[0]_6a[1]_25 + a[0]_7a[1]_24 + a[0]_8a[1]_23 + a[0]_9a[1]_22 + a[0]_10a[1]_21 + a[0]_11a[1]_20 + a[0]_12a[1]_19 + a[0]_13a[1]_18 + a[0]_14a[1]_17 + a[0]_15a[1]_16 + a[0]_16a[1]_15 + a[0]_17a[1]_14 + a[0]_18a[1]_13 + a[0]_19a[1]_12 + a[0]_20a[1]_11 + a[0]_21a[1]_10 + a[0]_22a[1]_9 + a[0]_23a[1]_8 + a[0]_24a[1]_7 + a[0]_25a[1]_6 + a[0]_26a[1]_5 + a[0]_27a[1]_4 + a[0]_28a[1]_3 + a[0]_29a[1]_2 + a[0]_30a[1]_1 + a[0]_31a[1]_0
b[1]_0= a[0]_1a[1]_31 + a[0]_2a[1]_30 + a[0]_3a[1]_29 + a[0]_4a[1]_28 + a[0]_5a[1]_27 + a[0]_6a[1]_26 + a[0]_7a[1]_25 + a[0]_8a[1]_24 + a[0]_9a[1]_23 + a[0]_10a[1]_22 + a[0]_11a[1]_21 + a[0]_12a[1]_20 + a[0]_13a[1]_19 + a[0]_14a[1]_18 + a[0]_15a[1]_17 + a[0]_16a[1]_16 + a[0]_17a[1]_15 + a[0]_18a[1]_14 + a[0]_19a[1]_13 + a[0]_20a[1]_12 + a[0]_21a[1]_11 + a[0]_22a[1]_10 + a[0]_23a[1]_9 + a[0]_24a[1]_8 + a[0]_25a[1]_7 + a[0]_26a[1]_6 + a[0]_27a[1]_5 + a[0]_28a[1]_4 + a[0]_29a[1]_3 + a[0]_30a[1]_2 + a[0]_31a[1]_1
b[1]_1= a[0]_2a[1]_31 + a[0]_3a[1]_30 + a[0]_4a[1]_29 + a[0]_5a[1]_28 + a[0]_6a[1]_27 + a[0]_7a[1]_26 + a[0]_8a[1]_25 + a[0]_9a[1]_24 + a[0]_10a[1]_23 + a[0]_11a[1]_22 + a[0]_12a[1]_21 + a[0]_13a[1]_20 + a[0]_14a[1]_19 + a[0]_15a[1]_18 + a[0]_16a[1]_17 + a[0]_17a[1]_16 + a[0]_18a[1]_15 + a[0]_19a[1]_14 + a[0]_20a[1]_13 + a[0]_21a[1]_12 + a[0]_22a[1]_11 + a[0]_23a[1]_10 + a[0]_24a[1]_9 + a[0]_25a[1]_8 + a[0]_26a[1]_7 + a[0]_27a[1]_6 + a[0]_28a[1]_5 + a[0]_29a[1]_4 + a[0]_30a[1]_3 + a[0]_31a[1]_2
b[1]_2= a[0]_3a[1]_31 + a[0]_4a[1]_30 + a[0]_5a[1]_29 + a[0]_6a[1]_28 + a[0]_7a[1]_27 + a[0]_8a[1]_26 + a[0]_9a[1]_25 + a[0]_10a[1]_24 + a[0]_11a[1]_23 + a[0]_12a[1]_22 + a[0]_13a[1]_21 + a[0]_14a[1]_20 + a[0]_15a[1]_19 + a[0]_16a[1]_18 + a[0]_17a[1]_17 + a[0]_18a[1]_16 + a[0]_19a[1]_15 + a[0]_20a[1]_14 + a[0]_21a[1]_13 + a[0]_22a[1]_12 + a[0]_23a[1]_11 + a[0]_24a[1]_10 + a[0]_25a[1]_9 + a[0]_26a[1]_8 + a[0]_27a[1]_7 + a[0]_28a[1]_6 + a[0]_29a[1]_5 + a[0]_30a[1]_4 + a[0]_31a[1]_3
b[1]_3= a[0]_4a[1]_31 + a[0]_5a[1]_30 + a[0]_6a[1]_29 + a[0]_7a[1]_28 + a[0]_8a[1]_27 + a[0]_9a[1]_26 + a[0]_10a[1]_25 + a[0]_11a[1]_24 + a[0]_12a[1]_23 + a[0]_13a[1]_22 + a[0]_14a[1]_21 + a[0]_15a[1]_20 + a[0]_16a[1]_19 + a[0]_17a[1]_18 + a[0]_18a[1]_17 + a[0]_19a[1]_16 + a[0]_20a[1]_15 + a[0]_21a[1]_14 + a[0]_22a[1]_13 + a[0]_23a[1]_12 + a[0]_24a[1]_11 + a[0]_25a[1]_10 + a[0]_26a[1]_9 + a[0]_27a[1]_8 + a[0]_28a[1]_7 + a[0]_29a[1]_6 + a[0]_30a[1]_5 + a[0]_31a[1]_4
b[1]_4= a[0]_5a[1]_31 + a[0]_6a[1]_30 + a[0]_7a[1]_29 + a[0]_8a[1]_28 + a[0]_9a[1]_27 + a[0]_10a[1]_26 + a[0]_11a[1]_25 + a[0]_12a[1]_24 + a[0]_13a[1]_23 + a[0]_14a[1]_22 + a[0]_15a[1]_21 + a[0]_16a[1]_20 + a[0]_17a[1]_19 + a[0]_18a[1]_18 + a[0]_19a[1]_17 + a[0]_20a[1]_16 + a[0]_21a[1]_15 + a[0]_22a[1]_14 + a[0]_23a[1]_13 + a[0]_24a[1]_12 + a[0]_25a[1]_11 + a[0]_26a[1]_10 + a[0]_27a[1]_9 + a[0]_28a[1]_8 + a[0]_29a[1]_7 + a[0]_30a[1]_6 + a[0]_31a[1]_5
b[1]_5= a[0]_6a[1]_31 + a[0]_7a[1]_30 + a[0]_8a[1]_29 + a[0]_9a[1]_28 + a[0]_10a[1]_27 + a[0]_11a[1]_26 + a[0]_12a[1]_25 + a[0]_13a[1]_24 + a[0]_14a[1]_23 + a[0]_15a[1]_22 + a[0]_16a[1]_21 + a[0]_17a[1]_20 + a[0]_18a[1]_19 + a[0]_19a[1]_18 + a[0]_20a[1]_17 + a[0]_21a[1]_16 + a[0]_22a[1]_15 + a[0]_23a[1]_14 + a[0]_24a[1]_13 + a[0]_25a[1]_12 + a[0]_26a[1]_11 + a[0]_27a[1]_10 + a[0]_28a[1]_9 + a[0]_29a[1]_8 + a[0]_30a[1]_7 + a[0]_31a[1]_6
b[1]_6= a[0]_7a[1]_31 + a[0]_8a[1]_30 + a[0]_9a[1]_29 + a[0]_10a[1]_28 + a[0]_11a[1]_27 + a[0]_12a[1]_26 + a[0]_13a[1]_25 + a[0]_14a[1]_24 + a[0]_15a[1]_23 + a[0]_16a[1]_22 + a[0]_17a[1]_21 + a[0]_18a[1]_20 + a[0]_19a[1]_19 + a[0]_20a[1]_18 + a[0]_21a[1]_17 + a[0]_22a[1]_16 + a[0]_23a[1]_15 + a[0]_24a[1]_14 + a[0]_25a[1]_13 + a[0]_26a[1]_12 + a[0]_27a[1]_11 + a[0]_28a[1]_10 + a[0]_29a[1]_9 + a[0]_30a[1]_8 + a[0]_31a[1]_7
b[1]_7= a[0]_8a[1]_31 + a[0]_9a[1]_30 + a[0]_10a[1]_29 + a[0]_11a[1]_28 + a[0]_12a[1]_27 + a[0]_13a[1]_26 + a[0]_14a[1]_25 + a[0]_15a[1]_24 + a[0]_16a[1]_23 + a[0]_17a[1]_22 + a[0]_18a[1]_21 + a[0]_19a[1]_20 + a[0]_20a[1]_19 + a[0]_21a[1]_18 + a[0]_22a[1]_17 + a[0]_23a[1]_16 + a[0]_24a[1]_15 + a[0]_25a[1]_14 + a[0]_26a[1]_13 + a[0]_27a[1]_12 + a[0]_28a[1]_11 + a[0]_29a[1]_10 + a[0]_30a[1]_9 + a[0]_31a[1]_8
b[1]_8= a[0]_9a[1]_31 + a[0]_10a[1]_30 + a[0]_11a[1]_29 + a[0]_12a[1]_28 + a[0]_13a[1]_27 + a[0]_14a[1]_26 + a[0]_15a[1]_25 + a[0]_16a[1]_24 + a[0]_17a[1]_23 + a[0]_18a[1]_22 + a[0]_19a[1]_21 + a[0]_20a[1]_20 + a[0]_21a[1]_19 + a[0]_22a[1]_18 + a[0]_23a[1]_17 + a[0]_24a[1]_16 + a[0]_25a[1]_15 + a[0]_26a[1]_14 + a[0]_27a[1]_13 + a[0]_28a[1]_12 + a[0]_29a[1]_11 + a[0]_30a[1]_10 + a[0]_31a[1]_9
b[1]_9= a[0]_10a[1]_31 + a[0]_11a[1]_30 + a[0]_12a[1]_29 + a[0]_13a[1]_28 + a[0]_14a[1]_27 + a[0]_15a[1]_26 + a[0]_16a[1]_25 + a[0]_17a[1]_24 + a[0]_18a[1]_23 + a[0]_19a[1]_22 + a[0]_20a[1]_21 + a[0]_21a[1]_20 + a[0]_22a[1]_19 + a[0]_23a[1]_18 + a[0]_24a[1]_17 + a[0]_25a[1]_16 + a[0]_26a[1]_15 + a[0]_27a[1]_14 + a[0]_28a[1]_13 + a[0]_29a[1]_12 + a[0]_30a[1]_11 + a[0]_31a[1]_10
b[1]_10=a[0]_11a[1]_31 + a[0]_12a[1]_30 + a[0]_13a[1]_29 + a[0]_14a[1]_28 + a[0]_15a[1]_27 + a[0]_16a[1]_26 + a[0]_17a[1]_25 + a[0]_18a[1]_24 + a[0]_19a[1]_23 + a[0]_20a[1]_22 + a[0]_21a[1]_21 + a[0]_22a[1]_20 + a[0]_23a[1]_19 + a[0]_24a[1]_18 + a[0]_25a[1]_17 + a[0]_26a[1]_16 + a[0]_27a[1]_15 + a[0]_28a[1]_14 + a[0]_29a[1]_13 + a[0]_30a[1]_12 + a[0]_31a[1]_11
b[1]_11=a[0]_12a[1]_31 + a[0]_13a[1]_30 + a[0]_14a[1]_29 + a[0]_15a[1]_28 + a[0]_16a[1]_27 + a[0]_17a[1]_26 + a[0]_18a[1]_25 + a[0]_19a[1]_24 + a[0]_20a[1]_23 + a[0]_21a[1]_22 + a[0]_22a[1]_21 + a[0]_23a[1]_20 + a[0]_24a[1]_19 + a[0]_25a[1]_18 + a[0]_26a[1]_17 + a[0]_27a[1]_16 + a[0]_28a[1]_15 + a[0]_29a[1]_14 + a[0]_30a[1]_13 + a[0]_31a[1]_12
b[1]_12=a[0]_13a[1]_31 + a[0]_14a[1]_30 + a[0]_15a[1]_29 + a[0]_16a[1]_28 + a[0]_17a[1]_27 + a[0]_18a[1]_26 + a[0]_19a[1]_25 + a[0]_20a[1]_24 + a[0]_21a[1]_23 + a[0]_22a[1]_22 + a[0]_23a[1]_21 + a[0]_24a[1]_20 + a[0]_25a[1]_19 + a[0]_26a[1]_18 + a[0]_27a[1]_17 + a[0]_28a[1]_16 + a[0]_29a[1]_15 + a[0]_30a[1]_14 + a[0]_31a[1]_13
b[1]_13=a[0]_14a[1]_31 + a[0]_15a[1]_30 + a[0]_16a[1]_29 + a[0]_17a[1]_28 + a[0]_18a[1]_27 + a[0]_19a[1]_26 + a[0]_20a[1]_25 + a[0]_21a[1]_24 + a[0]_22a[1]_23 + a[0]_23a[1]_22 + a[0]_24a[1]_21 + a[0]_25a[1]_20 + a[0]_26a[1]_19 + a[0]_27a[1]_18 + a[0]_28a[1]_17 + a[0]_29a[1]_16 + a[0]_30a[1]_15 + a[0]_31a[1]_14
b[1]_14=a[0]_15a[1]_31 + a[0]_16a[1]_30 + a[0]_17a[1]_29 + a[0]_18a[1]_28 + a[0]_19a[1]_27 + a[0]_20a[1]_26 + a[0]_21a[1]_25 + a[0]_22a[1]_24 + a[0]_23a[1]_23 + a[0]_24a[1]_22 + a[0]_25a[1]_21 + a[0]_26a[1]_20 + a[0]_27a[1]_19 + a[0]_28a[1]_18 + a[0]_29a[1]_17 + a[0]_30a[1]_16 + a[0]_31a[1]_15
b[1]_15=a[0]_16a[1]_31 + a[0]_17a[1]_30 + a[0]_18a[1]_29 + a[0]_19a[1]_28 + a[0]_20a[1]_27 + a[0]_21a[1]_26 + a[0]_22a[1]_25 + a[0]_23a[1]_24 + a[0]_24a[1]_23 + a[0]_25a[1]_22 + a[0]_26a[1]_21 + a[0]_27a[1]_20 + a[0]_28a[1]_19 + a[0]_29a[1]_18 + a[0]_30a[1]_17 + a[0]_31a[1]_16
b[1]_16=a[0]_17a[1]_31 + a[0]_18a[1]_30 + a[0]_19a[1]_29 + a[0]_20a[1]_28 + a[0]_21a[1]_27 + a[0]_22a[1]_26 + a[0]_23a[1]_25 + a[0]_24a[1]_24 + a[0]_25a[1]_23 + a[0]_26a[1]_22 + a[0]_27a[1]_21 + a[0]_28a[1]_20 + a[0]_29a[1]_19 + a[0]_30a[1]_18 + a[0]_31a[1]_17
b[1]_17=a[0]_18a[1]_31 + a[0]_19a[1]_30 + a[0]_20a[1]_29 + a[0]_21a[1]_28 + a[0]_22a[1]_27 + a[0]_23a[1]_26 + a[0]_24a[1]_25 + a[0]_25a[1]_24 + a[0]_26a[1]_23 + a[0]_27a[1]_22 + a[0]_28a[1]_21 + a[0]_29a[1]_20 + a[0]_30a[1]_19 + a[0]_31a[1]_18
b[1]_18=a[0]_19a[1]_31 + a[0]_20a[1]_30 + a[0]_21a[1]_29 + a[0]_22a[1]_28 + a[0]_23a[1]_27 + a[0]_24a[1]_26 + a[0]_25a[1]_25 + a[0]_26a[1]_24 + a[0]_27a[1]_23 + a[0]_28a[1]_22 + a[0]_29a[1]_21 + a[0]_30a[1]_20 + a[0]_31a[1]_19
b[1]_19=a[0]_20a[1]_31 + a[0]_21a[1]_30 + a[0]_22a[1]_29 + a[0]_23a[1]_28 + a[0]_24a[1]_27 + a[0]_25a[1]_26 + a[0]_26a[1]_25 + a[0]_27a[1]_24 + a[0]_28a[1]_23 + a[0]_29a[1]_22 + a[0]_30a[1]_21 + a[0]_31a[1]_20
b[1]_20=a[0]_21a[1]_31 + a[0]_22a[1]_30 + a[0]_23a[1]_29 + a[0]_24a[1]_28 + a[0]_25a[1]_27 + a[0]_26a[1]_26 + a[0]_27a[1]_25 + a[0]_28a[1]_24 + a[0]_29a[1]_23 + a[0]_30a[1]_22 + a[0]_31a[1]_21
b[1]_21=a[0]_22a[1]_31 + a[0]_23a[1]_30 + a[0]_24a[1]_29 + a[0]_25a[1]_28 + a[0]_26a[1]_27 + a[0]_27a[1]_26 + a[0]_28a[1]_25 + a[0]_29a[1]_24 + a[0]_30a[1]_23 + a[0]_31a[1]_22
b[1]_22=a[0]_23a[1]_31 + a[0]_24a[1]_30 + a[0]_25a[1]_29 + a[0]_26a[1]_28 + a[0]_27a[1]_27 + a[0]_28a[1]_26 + a[0]_29a[1]_25 + a[0]_30a[1]_24 + a[0]_31a[1]_23
b[1]_23=a[0]_24a[1]_31 + a[0]_25a[1]_30 + a[0]_26a[1]_29 + a[0]_27a[1]_28 + a[0]_28a[1]_27 + a[0]_29a[1]_26 + a[0]_30a[1]_25 + a[0]_31a[1]_24
b[1]_24=a[0]_25a[1]_31 + a[0]_26a[1]_30 + a[0]_27a[1]_29 + a[0]_28a[1]_28 + a[0]_29a[1]_27 + a[0]_30a[1]_26 + a[0]_31a[1]_25
b[1]_25=a[0]_26a[1]_31 + a[0]_27a[1]_30 + a[0]_28a[1]_29 + a[0]_29a[1]_28 + a[0]_30a[1]_27 + a[0]_31a[1]_26
b[1]_26=a[0]_27a[1]_31 + a[0]_28a[1]_30 + a[0]_29a[1]_29 + a[0]_30a[1]_28 + a[0]_31a[1]_27
b[1]_27=a[0]_28a[1]_31 + a[0]_29a[1]_30 + a[0]_30a[1]_29 + a[0]_31a[1]_28
b[1]_28=a[0]_29a[1]_31 + a[0]_30a[1]_30 + a[0]_31a[1]_29
b[1]_29=a[0]_30a[1]_31 + a[0]_31a[1]_30
b[1]_30=a[0]_31a[1]_31`

let b=new Array(0x46508fb7, 0x6677e201);