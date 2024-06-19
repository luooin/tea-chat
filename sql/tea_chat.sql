/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : tea_chat

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 19/06/2024 17:29:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for wct_address
-- ----------------------------
DROP TABLE IF EXISTS `wct_address`;
CREATE TABLE `wct_address`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `uid` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_address
-- ----------------------------
INSERT INTO `wct_address` VALUES (20, '小新 6-120', 28);

-- ----------------------------
-- Table structure for wct_bill
-- ----------------------------
DROP TABLE IF EXISTS `wct_bill`;
CREATE TABLE `wct_bill`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `gids` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `uid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shop` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bill` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ndate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `total` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `way` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gnames` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `note` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `statecn` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cuidan` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `qid` int(0) NULL DEFAULT NULL,
  `qusername` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `qtel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `jifen` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 61 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_bill
-- ----------------------------
INSERT INTO `wct_bill` VALUES (58, '14', '', 'koroit', '30', '', '', '', '2024-05-10 19:01:06', '434', '外卖', '龙井茶', '', '19815090064', '', '', '', '待付款', '', NULL, '', '', '0');
INSERT INTO `wct_bill` VALUES (59, '14', '', 'kehu', '28', '', '', '', '2024-05-10 21:14:57', '434', '外卖', '龙井茶', '', '15123385885', '小新 15123385885 6-120', '', '', '已付款', '', NULL, '', '', '0');
INSERT INTO `wct_bill` VALUES (60, '17', '', 'koroit', '30', '', '', '', '2024-06-19 17:12:36', '138', '外卖', '红茶', '', '19815090064', '', '', '', '已接单', '', 29, 'peisongyuan', '18212345674', '0');
INSERT INTO `wct_bill` VALUES (61, '17,15', '', 'kehu', '28', '', '', '', '2024-06-19 16:38:38', '483', '外卖', '红茶,熟普洱', '', '15123385885', '小新 15123385885 6-120', '', '', '待付款', '', NULL, '', '', '0');
INSERT INTO `wct_bill` VALUES (62, '15', '', 'kehu', '28', '', '', '', '2024-06-19 16:39:12', '345', '外卖', '熟普洱', '', '15123385885', '小新 15123385885 6-120', '', '', '待付款', '', NULL, '', '', '0');

-- ----------------------------
-- Table structure for wct_good
-- ----------------------------
DROP TABLE IF EXISTS `wct_good`;
CREATE TABLE `wct_good`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `gname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `jifen` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `note` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `count` int(0) NULL DEFAULT NULL,
  `typeid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `xiaoliang` int(0) NULL DEFAULT NULL,
  `ownid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shop` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mcount` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `saleType` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sale` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shouye` int(0) NULL DEFAULT NULL,
  `zan` int(0) NULL DEFAULT NULL,
  `tel` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `codeimg` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_good
-- ----------------------------
INSERT INTO `wct_good` VALUES (14, '龙井茶', '434', '', '这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息这里是茶叶的详细介绍信息', '普洱茶', '60f105ea-09b3-49a6-b411-80d6c02c63fd.jpg', NULL, '17', NULL, '', '', '', '', '', '', NULL, NULL, '', '', '');
INSERT INTO `wct_good` VALUES (15, '熟普洱', '345', '', '这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息这里是详细的茶叶介绍信息', '熟普洱', '4755cdc4-dab7-432a-8920-1071ea366b59.jpg', NULL, '16', NULL, '', '', '', '', '', '', NULL, NULL, '', '', '');
INSERT INTO `wct_good` VALUES (17, '红茶', '138', '', '真的好喝', '普洱茶', '71eea068-60c8-408e-8e64-25e1e9f611f2.jpg', NULL, '17', NULL, '', '', '', '', '', '', NULL, NULL, '', '', '');

-- ----------------------------
-- Table structure for wct_notice
-- ----------------------------
DROP TABLE IF EXISTS `wct_notice`;
CREATE TABLE `wct_notice`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ndate` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_notice
-- ----------------------------
INSERT INTO `wct_notice` VALUES (14, '普洱茶介绍', '<p>这里是详细的内容信息</p><p><img src=\"upload/3c89c9ad-7105-4c94-a760-e7307e1300ab.jpg\" style=\"max-width:100%;\"><br></p><p><img src=\"upload/e9273468-4e85-47db-80f9-1076a04a801a.jpg\" style=\"max-width:100%;\"><br></p>', '2024-05-10 19:01:06', '', '5546ed23-3410-40fd-87fd-1a8653ac1ff3.jpg', '0ad40d2b-e77e-46ad-a449-c5bac6232aa7.mp4');
INSERT INTO `wct_notice` VALUES (15, '普洱技巧', '<p>这里是详细的内容,这里的内容可以自己任意编辑的</p><p><img src=\"upload/8e4e6313-cde1-4c51-aeea-cd214c856309.jpg\" style=\"max-width:100%;\"><br></p>', '2024-05-10 19:01:06', '', 'bfcac90a-82cc-4de7-88b0-d10ae86ba552.jpg', '6936034f-c014-4c4b-abcd-f7cccc344f88.mp4');
INSERT INTO `wct_notice` VALUES (16, '熊', '<p>熊</p>', '2024-05-10 19:01:06', '', 'dee527e1-d686-44a4-a42c-87b1c6302c81.jpg', '991def67-6f7b-4e83-a583-4270c48d6fb5.mp4');

-- ----------------------------
-- Table structure for wct_posts
-- ----------------------------
DROP TABLE IF EXISTS `wct_posts`;
CREATE TABLE `wct_posts`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `uid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ndate` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_posts
-- ----------------------------
INSERT INTO `wct_posts` VALUES (1, '一起来交流', '这里是交流讨论内容', '28', 'kehu', '2024-05-10 19:01:06', '1e6b4054-a1be-44f3-8c84-5bb79a87d4ea.jpg', '交流');
INSERT INTO `wct_posts` VALUES (2, '可以发帖交流', '这里是详细内容,可以配图', '28', 'kehu', '2024-05-10 19:01:06', '8e7bb582-8330-40c7-8081-95a920b17b75.jpg', '交流');

-- ----------------------------
-- Table structure for wct_replay
-- ----------------------------
DROP TABLE IF EXISTS `wct_replay`;
CREATE TABLE `wct_replay`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `pid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `uid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ndate` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_replay
-- ----------------------------
INSERT INTO `wct_replay` VALUES (1, '1', '不错', '', '', '2024-05-10 19:01:06', NULL);
INSERT INTO `wct_replay` VALUES (2, '1', '呵呵', '28', 'kehu', '2024-05-10 19:01:06', NULL);
INSERT INTO `wct_replay` VALUES (3, '1', '很好喝', '30', 'koroit', '2024-05-10 19:01:06', NULL);

-- ----------------------------
-- Table structure for wct_shop
-- ----------------------------
DROP TABLE IF EXISTS `wct_shop`;
CREATE TABLE `wct_shop`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `sname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `note` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `longitude` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `latitude` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ownid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `passwd` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `codeimg` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_shop
-- ----------------------------

-- ----------------------------
-- Table structure for wct_type
-- ----------------------------
DROP TABLE IF EXISTS `wct_type`;
CREATE TABLE `wct_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ownid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_type
-- ----------------------------
INSERT INTO `wct_type` VALUES (15, '生普洱', '');
INSERT INTO `wct_type` VALUES (16, '熟普洱', '');
INSERT INTO `wct_type` VALUES (17, '普洱茶', '');
INSERT INTO `wct_type` VALUES (18, '红茶', '');

-- ----------------------------
-- Table structure for wct_user
-- ----------------------------
DROP TABLE IF EXISTS `wct_user`;
CREATE TABLE `wct_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `passwd` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `roletype` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `qq` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `wechat` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `birth` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sid` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `statecn` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `clientId` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `favs` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `money` int(0) NULL DEFAULT NULL,
  `openid` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgurl` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `xinqing` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `yanse` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shengao` int(0) NULL DEFAULT NULL,
  `tizhong` int(0) NULL DEFAULT NULL,
  `jifen` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_user
-- ----------------------------
INSERT INTO `wct_user` VALUES (1, 'admin', '123456', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `wct_user` VALUES (28, 'kehu', '111111', '2', '', '18212451234', '', '', '男', '', '', '', '6456', '', '', '', '11,15,17', 472, '', '', '', '', NULL, NULL, 968);
INSERT INTO `wct_user` VALUES (29, 'peisongyuan', '111111', '3', 'ideabobo@21.com', '18212345674', '', '', '', '', '95809ef3-7125-4729-8efd-5817cf628125.jpg', '', '', '', '', '', '', NULL, '', '', '', '', NULL, NULL, NULL);
INSERT INTO `wct_user` VALUES (30, 'koroit', '123456', '2', '123456789@qq.com', '18212345678', '123456789', '123456789', '男', '2001-05-10', '', '', '江西省南昌市', '', '', '', '17', 662, '', '', '', '', NULL, NULL, 138);

-- ----------------------------
-- Table structure for wct_youhuijuan
-- ----------------------------
DROP TABLE IF EXISTS `wct_youhuijuan`;
CREATE TABLE `wct_youhuijuan`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `total` int(0) NULL DEFAULT NULL,
  `extime` int(0) NULL DEFAULT NULL,
  `sid` int(0) NULL DEFAULT NULL,
  `uid` int(0) NULL DEFAULT NULL,
  `typeid` int(0) NULL DEFAULT NULL,
  `fulluse` int(0) NULL DEFAULT NULL,
  `ndate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `extimestr` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `statecn` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of wct_youhuijuan
-- ----------------------------
INSERT INTO `wct_youhuijuan` VALUES (16, 20, 1636560000, NULL, NULL, 1, 200, '2024-05-10 19:01:06', '2025-05-10 19:01:06', '', '');
INSERT INTO `wct_youhuijuan` VALUES (17, 30, 1621699200, NULL, NULL, 1, 300, '2024-05-10 19:01:06', '2025-05-10 19:01:06', '', '');
INSERT INTO `wct_youhuijuan` VALUES (18, 20, 1636560000, NULL, 28, 2, 200, '2024-05-10 19:01:06', '2025-05-10 19:01:06', '', '正常');
INSERT INTO `wct_youhuijuan` VALUES (19, 30, 1621699200, NULL, 28, 2, 300, '2024-05-10 19:01:06', '2025-05-10 19:01:06', '', '正常');
INSERT INTO `wct_youhuijuan` VALUES (20, 20, 1636560000, NULL, 28, 2, 200, '2024-05-10 19:01:06', '2025-05-10 19:01:06', '', '正常');

SET FOREIGN_KEY_CHECKS = 1;
