    class Solution {
        public static String whoLikesIt(String... names) {
            StringBuilder finalString = new StringBuilder();

            if (names.length >= 4) {
                finalString.append(names[0]);
                finalString.append(", ");
                finalString.append(names[1]);
                finalString.append(" and ");
                finalString.append(names.length - 2);
                finalString.append(" others like this");
            } else if (names.length == 3) {
                for (int i = 0; i < names.length; i++) {
                    if (i == names.length - 1) {
                        finalString.append(" and ");
                        finalString.append(names[i]);
                        finalString.append(" like this");
                    } else {
                        finalString.append(names[i]);
                    }
                    if (i < names.length - 2) {
                        finalString.append(", ");
                    }
                }
            } else if (names.length == 2) {
                finalString.append(names[0]);
                finalString.append(" and ");
                finalString.append(names[1]);
                finalString.append(" like this");
            } else if (names.length == 1){
                finalString.append(names[0] + " likes this");
            } else {
                finalString.append("no one likes this");
            }
            return finalString.toString();
        }
    }
